import type { VercelRequest, VercelResponse } from '@vercel/node';

const supabaseUrl = process.env.SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_ANON_KEY!;

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const { createClient } = await import('@supabase/supabase-js');
  const supabase = createClient(supabaseUrl, supabaseKey);

  try {
    const { url } = req;
    const method = req.method;

    if (url === '/api/products' && method === 'GET') {
      const { data, error } = await supabase.from('products').select('*');
      if (error) throw error;
      return res.json(data || []);
    }

    if (url === '/api/content' && method === 'GET') {
      const { data, error } = await supabase.from('content').select('*');
      if (error) throw error;
      return res.json(data || []);
    }

    if (url === '/api/contact' && method === 'POST') {
      const { data, error } = await supabase.from('contact_messages').insert(req.body).select().single();
      if (error) throw error;
      return res.json(data);
    }

    if (url === '/api/admin/login' && method === 'POST') {
      const { email, password } = req.body;
      if ((email === 'wesleykoech2022@gmail.com' || email === 'chepkoechjoan55@gmail.com') && password === 'admin123') {
        return res.json({ success: true, user: { email, role: 'admin' } });
      }
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    if (url === '/api/products' && method === 'POST') {
      const { data, error } = await supabase.from('products').insert(req.body).select().single();
      if (error) throw error;
      return res.json(data);
    }

    if (url?.startsWith('/api/products/') && method === 'PUT') {
      const id = url.split('/').pop();
      const { data, error } = await supabase.from('products').update(req.body).eq('id', id).select().single();
      if (error) throw error;
      return res.json(data);
    }

    if (url?.startsWith('/api/products/') && method === 'DELETE') {
      const id = url.split('/').pop();
      const { error } = await supabase.from('products').delete().eq('id', id);
      if (error) throw error;
      return res.json({ success: true });
    }

    return res.status(404).json({ error: 'Endpoint not found' });

  } catch (error) {
    console.error('API Error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
