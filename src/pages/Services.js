import React from 'react';

const servicesData = [
  {
    icon: "📘",
    title: "ফেসবুক মার্কেটিং",
    description: "ফেসবুক পেজ বুস্টিং, এড ক্যাম্পেইন, এবং টার্গেটেড মার্কেটিং সেবা",
    features: ["পেজ বুস্টিং", "এড ক্যাম্পেইন ম্যানেজমেন্ট", "কাস্টমার এনগেজমেন্ট"]
  },
  {
    icon: "🛒",
    title: "ই-কমার্স সলুশন",
    description: "সম্পূর্ণ ই-কমার্স ওয়েবসাইট ডেভেলপমেন্ট এবং ম্যানেজমেন্ট সিস্টেম",
    features: ["অনলাইন স্টোর", "পেমেন্ট গেটওয়ে", "ইনভেন্টরি ম্যানেজমেন্ট"]
  },
  {
    icon: "💻",
    title: "ওয়েব ডেভেলপমেন্ট",
    description: "আধুনিক এবং রেসপন্সিভ ওয়েবসাইট ডিজাইন এবং ডেভেলপমেন্ট",
    features: ["কাস্টম ওয়েবসাইট", "রেসপন্সিভ ডিজাইন", "SEO অপটিমাইজেশন"]
  },
  {
    icon: "📊",
    title: "ডোমেইন ও হোস্টিং",
    description: "ডোমেইন রেজিস্ট্রেশন এবং নিরাপদ হোস্টিং সেবা",
    features: ["ডোমেইন রেজিস্ট্রেশন", "SSL সার্টিফিকেট", "২৪/৭ সাপোর্ট"]
  },
  {
    icon: "💡",
    title: "গ্রাফিক ডিজাইন",
    description: "প্রফেশনাল লোগো, ব্যানার, এবং ব্র্যান্ডিং ডিজাইন সেবা",
    features: ["লোগো ডিজাইন", "ব্যানার ডিজাইন", "সোশ্যাল মিডিয়া পোস্ট"]
  },
  {
    icon: "🤖",
    title: "চ্যাটবট অটোমেশন",
    description: "ফেসবুক মেসেঞ্জার এবং ওয়েবসাইট চ্যাটবট সেটআপ",
    features: ["অটো রিপ্লাই", "কাস্টমার সাপোর্ট", "লিড জেনারেশন"]
  }
];

const Services = () => {
  return (
    <main className="max-w-6xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">আমাদের সেবাসমূহ</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          আপনার ব্যবসার জন্য সম্পূর্ণ ডিজিটাল সলিউশন
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {servicesData.map((service, index) => (
          <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition">
            <div className="text-5xl mb-4">{service.icon}</div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
            <p className="text-gray-600 mb-4">{service.description}</p>
            <ul className="space-y-2">
              {service.features.map((feature, idx) => (
                <li key={idx} className="flex items-center text-sm text-gray-600">
                  <span className="text-green-500 mr-2">✓</span>
                  {feature}
                </li>
              ))}
            </ul>
            <button className="mt-6 w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition">
              বিস্তারিত দেখুন
            </button>
          </div>
        ))}
      </div>

      <div className="mt-16 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-xl p-8 text-center">
        <h2 className="text-3xl font-bold mb-4">আপনার প্রয়োজনীয় সেবা খুঁজে পাচ্ছেন না?</h2>
        <p className="text-lg mb-6">আমাদের সাথে যোগাযোগ করুন এবং কাস্টম সলিউশন পান</p>
        <button className="bg-white text-red-500 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition">
          যোগাযোগ করুন
        </button>
      </div>
    </main>
  );
};

export default Services;
