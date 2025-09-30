import React from 'react';

const About = () => {
  return (
    <main className="max-w-6xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">আমাদের সম্পর্কে</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          SME CUBE হলো ছোট ও মাঝারি ব্যবসার জন্য একটি সম্পূর্ণ ডিজিটাল সলিউশন প্ল্যাটফর্ম
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 mb-16">
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">আমাদের লক্ষ্য</h2>
          <p className="text-gray-600 leading-relaxed">
            আমাদের লক্ষ্য হল বাংলাদেশের ছোট ও মাঝারি ব্যবসাগুলিকে ডিজিটাল প্রযুক্তির মাধ্যমে এগিয়ে নিয়ে যাওয়া। 
            আমরা বিশ্বাস করি যে প্রতিটি ব্যবসার সফলতার জন্য সঠিক প্রযুক্তি এবং পরিকল্পনা অপরিহার্য।
          </p>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-lg">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">আমাদের ভিশন</h2>
          <p className="text-gray-600 leading-relaxed">
            আমরা স্বপ্ন দেখি এমন একটি বাংলাদেশের যেখানে প্রতিটি ব্যবসা, ছোট বা বড়, ডিজিটাল প্রযুক্তির 
            সুবিধা পায় এবং বৈশ্বিক বাজারে প্রতিযোগিতা করতে পারে।
          </p>
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl p-12 text-center mb-16">
        <h2 className="text-3xl font-bold mb-6">কেন আমাদের বেছে নেবেন?</h2>
        <div className="grid md:grid-cols-3 gap-8 mt-8">
          <div>
            <div className="text-5xl mb-4">🏆</div>
            <h3 className="text-xl font-bold mb-2">অভিজ্ঞতা</h3>
            <p>৫+ বছরের অভিজ্ঞতা</p>
          </div>
          <div>
            <div className="text-5xl mb-4">👥</div>
            <h3 className="text-xl font-bold mb-2">বিশ্বস্ততা</h3>
            <p>১০০০+ সন্তুষ্ট ক্লায়েন্ট</p>
          </div>
          <div>
            <div className="text-5xl mb-4">⚡</div>
            <h3 className="text-xl font-bold mb-2">দ্রুততা</h3>
            <p>দ্রুত ডেলিভারি সময়</p>
          </div>
        </div>
      </div>

      <div className="bg-white p-8 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">আমাদের টিম</h2>
        <p className="text-gray-600 text-center max-w-3xl mx-auto">
          আমাদের দক্ষ পেশাদার টিম সর্বদা আপনার ব্যবসার সফলতার জন্য প্রতিশ্রুতিবদ্ধ। 
          ওয়েব ডেভেলপমেন্ট, ডিজিটাল মার্কেটিং, এবং ব্যবসায়িক পরামর্শে আমাদের বিশেষজ্ঞরা 
          আপনার প্রতিটি প্রয়োজন পূরণ করতে প্রস্তুত।
        </p>
      </div>
    </main>
  );
};

export default About;
