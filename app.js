try {
  const { useState, useEffect } = React;

  const Drawer = ({ isOpen, toggleDrawer }) => (
    <div className={`fixed inset-y-0 left-0 w-64 bg-secondary-bg transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out z-50`}>
      <div className="p-4">
        <h2 className="text-xl font-bold text-accent">EternalBit</h2>
        <button onClick={toggleDrawer} className="mt-2 text-text-primary focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
        </button>
      </div>
      <nav className="mt-4">
        <a href="#home" onClick={toggleDrawer} className="block px-4 py-2 text-text-primary hover:bg-gray-600">Home</a>
        <a href="#about" onClick={toggleDrawer} className="block px-4 py-2 text-text-primary hover:bg-gray-600">About</a>
        <a href="#services" onClick={toggleDrawer} className="block px-4 py-2 text-text-primary hover:bg-gray-600">Services</a>
        <a href="#products" onClick={toggleDrawer} className="block px-4 py-2 text-text-primary hover:bg-gray-600">Products</a>
        <a href="#contact" onClick={toggleDrawer} className="block px-4 py-2 text-text-primary hover:bg-gray-600">Contact</a>
        <a href="#privacy" onClick={toggleDrawer} className="block px-4 py-2 text-text-primary hover:bg-gray-600">Privacy Policy</a>
      </nav>
    </div>
  );

  const Navbar = ({ toggleDrawer }) => (
    <nav className="fixed top-0 w-full bg-secondary-bg bg-opacity-90 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <button onClick={toggleDrawer} className="text-text-primary focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
            </button>
            <h1 className="ml-4 text-2xl font-bold text-accent">EternalBit</h1>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <a href="#home" className="text-text-primary hover:text-accent">Home</a>
            <a href="#about" className="text-text-primary hover:text-accent">About</a>
            <a href="#services" className="text-text-primary hover:text-accent">Services</a>
            <a href="#products" className="text-text-primary hover:text-accent">Products</a>
            <a href="#contact" className="text-text-primary hover:text-accent">Contact</a>
            <a href="#privacy" className="text-text-primary hover:text-accent">Privacy Policy</a>
          </div>
        </div>
      </div>
    </nav>
  );

  const App = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [showPolicy, setShowPolicy] = useState(false);

    const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);
    const togglePolicy = () => setShowPolicy(!showPolicy);

    useEffect(() => {
      if (window.location.hash === '#privacy') {
        setShowPolicy(true);
        const privacySection = document.getElementById('privacy');
        if (privacySection) {
          privacySection.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }, []);

    return (
      <div>
        <Drawer isOpen={isDrawerOpen} toggleDrawer={toggleDrawer} />
        <Navbar toggleDrawer={toggleDrawer} />
        <div className="pt-16">
          <section id="home" className="hero-bg">
            <div className="text-center">
              <h2 className="text-5xl md:text-7xl font-bold text-text-primary mb-4">Empowering the Future</h2>
              <p className="text-xl md:text-2xl text-accent">Innovative IT Solutions by EternalBit</p>
              <a href="#contact" className="mt-6 inline-block px-6 py-3 bg-accent text-primary-bg font-semibold rounded-lg hover:bg-orange-400">Get Started</a>
            </div>
          </section>
          <div className="marquee">
            <span>Great Power Comes With Great Responsibility</span>
          </div>
          <section id="about" className="py-20 px-4 max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-accent mb-8">About EternalBit</h2>
            <p className="text-lg text-text-secondary">EternalBit is a leading provider of IT products and expert services, dedicated to delivering cutting-edge solutions that drive business success. Our mission is to empower organizations with technology that transforms ideas into reality.</p>
          </section>
          <section id="services" className="py-20 px-4 max-w-7xl mx-auto bg-secondary-bg">
            <h2 className="text-4xl font-bold text-center text-accent mb-8">Our Services</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-6 bg-gray-600 rounded-lg">
                <h3 className="text-2xl font-semibold text-text-primary mb-4">Cloud Solutions</h3>
                <p className="text-text-secondary">Scalable and secure cloud infrastructure for your business needs.</p>
              </div>
              <div className="p-6 bg-gray-600 rounded-lg">
                <h3 className="text-2xl font-semibold text-text-primary mb-4">Cybersecurity</h3>
                <p className="text-text-secondary">Protect your data with our advanced security services.</p>
              </div>
              <div className="p-6 bg-gray-600 rounded-lg">
                <h3 className="text-2xl font-semibold text-text-primary mb-4">IT Consulting</h3>
                <p className="text-text-secondary">Expert guidance to optimize your IT strategy.</p>
              </div>
            </div>
          </section>
          <section id="products" className="py-20 px-4 max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-accent mb-8">Our Products</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-6 bg-gray-600 rounded-lg">
                <h3 className="text-2xl font-semibold text-text-primary mb-4">EternaCloud</h3>
                <p className="text-text-secondary">A robust cloud platform for seamless operations.</p>
              </div>
              <div className="p-6 bg-gray-600 rounded-lg">
                <h3 className="text-2xl font-semibold text-text-primary mb-4">SecureBit</h3>
                <p className="text-text-secondary">Next-gen cybersecurity software for enterprise protection.</p>
              </div>
              <div className="p-6 bg-gray-600 rounded-lg">
                <h3 className="text-2xl font-semibold text-text-primary mb-4">BitAnalytics</h3>
                <p className="text-text-secondary">Powerful data analytics tool for actionable insights.</p>
              </div>
            </div>
          </section>
          <section id="contact" className="py-20 px-4 max-w-7xl mx-auto bg-secondary-bg">
            <h2 className="text-4xl font-bold text-center text-accent mb-8">Contact Us</h2>
            <div className="max-w-lg mx-auto">
              <div className="space-y-4">
                <input type="text" placeholder="Name" className="w-full p-3 bg-gray-600 text-text-primary rounded-lg focus:outline-none focus:ring-2 focus:ring-accent" />
                <input type="email" placeholder="Email" className="w-full p-3 bg-gray-600 text-text-primary rounded-lg focus:outline-none focus:ring-2 focus:ring-accent" />
                <textarea placeholder="Message" rows="5" className="w-full p-3 bg-gray-600 text-text-primary rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"></textarea>
                <button onClick={() => alert('Message sent!')} className="w-full p-3 bg-accent text-primary-bg font-semibold rounded-lg hover:bg-orange-400">Send Message</button>
              </div>
            </div>
          </section>
          <section id="privacy" className="py-20 px-4 max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-accent mb-8">
              <button onClick={togglePolicy}>Privacy Policy</button>
            </h2>
            {showPolicy && (
              <div className="text-text-secondary">
                <h3 className="text-2xl font-semibold mb-4">EternalBit Privacy Policy</h3>
                <p className="mb-4">At EternalBit, we are committed to protecting your privacy. This policy outlines how we collect, use, and safeguard your personal information.</p>
                <h4 className="text-xl font-semibold mb-2">Data Collection</h4>
                <p className="mb-4">We collect information you provide directly, such as contact details, and data gathered through website interactions.</p>
                <h4 className="text-xl font-semibold mb-2">Data Usage</h4>
                <p className="mb-4">Your information is used to improve our services, respond to inquiries, and provide personalized experiences.</p>
                <h4 className="text-xl font-semibold mb-2">Data Protection</h4>
                <p className="mb-4">We implement robust security measures to protect your data from unauthorized access.</p>
                <p>For full details, please contact us at privacy@eternalbit.it.com.</p>
              </div>
            )}
          </section>
          <footer className="bg-secondary-bg py-6 text-center text-text-secondary">
            <p>© 2025 EternalBit. All rights reserved.</p>
          </footer>
        </div>
      </div>
    );
  };

  ReactDOM.render(<App />, document.getElementById('root'));
} catch (error) {
  console.error('Runtime error in script:', error);
  document.getElementById('root').innerHTML = '<h1 style="color: red; text-align: center;">Error loading application. Please try again later.</h1>';
}