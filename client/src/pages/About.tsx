
import { Button } from "@/components/ui/button";
import { Leaf, Users, Award, Heart } from "lucide-react";
import AuthButton from '@/components/AuthButton';
import NavigationDropdown from '@/components/NavigationDropdown';
import { useQuery } from '@tanstack/react-query';
import { apiClient } from '@/lib/api';

const About = () => {
  // Fetch content from database
  const { data: content = {} } = useQuery({
    queryKey: ['about-content'],
    queryFn: async () => {
      const data = await apiClient.getContent();
      
      // Convert to object for easy access
      const contentObj: { [key: string]: { title: string; content: string } } = {};
      data?.forEach((item: any) => {
        const key = item.title?.toLowerCase().replace(/\s+/g, '_') || '';
        contentObj[key] = { title: item.title || '', content: item.content || '' };
      });
      return contentObj;
    },
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div>
                <h1 className="text-2xl font-bold">
                  <span className="text-orange-500">Little</span>
                  <span className="text-green-600">Forest</span>
                </h1>
                <p className="text-sm text-gray-600">Nurturing Nature</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <AuthButton />
              <Button onClick={() => window.location.href = '/'} className="bg-orange-500 hover:bg-orange-600 text-white">
                Shop Now
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation Menu */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-start">
          <div className="scale-125">
            <NavigationDropdown />
          </div>
        </div>
      </div>



      {/* About Introduction */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-green-800 mb-8">About <span className="text-orange-500">Little</span><span className="text-green-600">Forest</span> Nursery</h2>
          <p className="text-gray-600 text-xl leading-relaxed mb-8">
            Little Forest Nursery is a nature-inspired social-enterprise rooted in Bomet County, Kenya. We are passionate about restoring landscapes, conserving water sources, and greening spaces—one seedling at a time.
          </p>
          <p className="text-green-700 text-2xl font-semibold">
            <span className="text-orange-500">Little</span><span className="text-green-600">Forest</span> Nursery — Restoring Water Resources, One Tree at a Time.
          </p>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-16 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-green-800 mb-4">What We Offer</h3>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              We specialize in the propagation and sale of high-quality seedlings and organic products that support environmental restoration and sustainable living.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="text-4xl mb-4">🌳</div>
              <h4 className="font-semibold text-gray-900 mb-2">Indigenous Trees</h4>
              <p className="text-gray-600 text-sm">Seedlings for reforestation and water source restoration</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="text-4xl mb-4">🍊</div>
              <h4 className="font-semibold text-gray-900 mb-2">Fruit Trees</h4>
              <p className="text-gray-600 text-sm">Supporting food security and sustainable livelihoods</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="text-4xl mb-4">🌼</div>
              <h4 className="font-semibold text-gray-900 mb-2">Ornamental Plants</h4>
              <p className="text-gray-600 text-sm">For greening homes, institutions and beautification</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="text-4xl mb-4">🍯</div>
              <h4 className="font-semibold text-gray-900 mb-2">Organic Honey</h4>
              <p className="text-gray-600 text-sm">Harvested from indigenous little forests</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Impact Areas */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-green-800 mb-4">Our Impact Areas</h3>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Our work is grounded in the belief that growing trees is not just about greening the land—it's about healing ecosystems, empowering communities, and securing a sustainable future.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-green-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Leaf className="h-8 w-8 text-green-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">Water Source Restoration</h4>
              <p className="text-gray-600">Indigenous tree seedlings specifically chosen for reforestation and water source conservation, helping restore natural water cycles and protect watersheds.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">Food Security & Livelihoods</h4>
              <p className="text-gray-600">Fruit tree seedlings and organic honey supporting sustainable livelihoods and food security for families and communities across Kenya.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-green-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">Beautification & Greening</h4>
              <p className="text-gray-600">Ornamental plants and flowers for greening homes, institutions, and community beautification projects that create healthier living environments.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-gradient-to-r from-green-800 to-green-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-bold mb-6">Our Mission</h3>
          <p className="text-xl leading-relaxed mb-8">
            We help you grow your own little forest at home with a variety of indigenous and ornamental trees, so you can contribute to a greener, healthier environment from your own compound.
          </p>
          <p className="text-lg text-green-100">
            Whether you're a farmer, a conservationist, a hotel, or a homeowner, we're here to help you grow with purpose.
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-green-800 mb-4">Ready to Grow Your Forest?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Join us in creating a greener future. Whether you're looking for indigenous trees, fruit trees, or ornamental plants, we have the perfect seedlings for your project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button onClick={() => window.location.href = '/'} className="bg-green-600 hover:bg-green-700 text-white px-8 py-3">
              Shop Now
            </Button>
            <Button 
              onClick={() => {
                const message = `Hi
I'd like to make inquiries about the seedlings and honey.
Thank you! for message us.`;
                
                const whatsappUrl = `https://wa.me/254108029407?text=${encodeURIComponent(message)}`;
                window.open(whatsappUrl, '_blank');
              }}
              variant="outline" 
              className="border-green-600 text-green-600 hover:bg-green-50 px-8 py-3"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <span className="text-xl font-bold">
                  <span className="text-orange-500">Little</span>
                  <span className="text-green-400">Forest</span>
                </span>
              </div>
              <p className="text-green-200 text-sm">
                Restoring Water Resources, One Tree at a Time.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm text-green-200">
                <li><a href="/" className="hover:text-white">Shop with us</a></li>
                <li><a href="/about" className="hover:text-white">About Us</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Contact Info</h3>
              <div className="space-y-2 text-sm text-green-200 mb-4">
                <p>📱 WhatsApp: +254 108 029 407</p>
              </div>
            </div>
          </div>

          <div className="border-t border-green-700 mt-8 pt-8 text-center">
            <p className="text-green-200 text-sm">
              © 2024 Little Forest. All rights reserved. | Restoring Water Resources, One Tree at a Time.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About;
