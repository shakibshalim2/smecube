import React from 'react';

const blogPosts = [
  {
    id: 1,
    title: "ডিজিটাল মার্কেটিং এ সফলতার ১০ টি টিপস",
    excerpt: "আধুনিক যুগে ডিজিটাল মার্কেটিং ছাড়া ব্যবসার সফলতা অসম্ভব। জানুন কিভাবে আপনার ব্যবসাকে এগিয়ে নিয়ে যাবেন...",
    date: "২৫ সেপ্টেম্বর, ২০২৫",
    category: "মার্কেটিং",
    image: "📱"
  },
  {
    id: 2,
    title: "ই-কমার্স ব্যবসা শুরু করার গাইড",
    excerpt: "অনলাইনে ব্যবসা শুরু করতে চান? জানুন কিভাবে একটি সফল ই-কমার্স প্ল্যাটফর্ম তৈরি করবেন...",
    date: "২০ সেপ্টেম্বর, ২০২৫",
    category: "ই-কমার্স",
    image: "🛒"
  },
  {
    id: 3,
    title: "সোশ্যাল মিডিয়া ব্র্যান্ডিং স্ট্র্যাটেজি",
    excerpt: "সোশ্যাল মিডিয়ায় আপনার ব্র্যান্ডকে কিভাবে শক্তিশালী করবেন? জানুন সেরা কৌশলগুলো...",
    date: "১৫ সেপ্টেম্বর, ২০২৫",
    category: "ব্র্যান্ডিং",
    image: "🎯"
  },
  {
    id: 4,
    title: "ওয়েবসাইট SEO এর বেসিক গাইডলাইন",
    excerpt: "গুগলে আপনার ওয়েবসাইটের র‍্যাংকিং বাড়াতে চান? জানুন SEO এর মূল বিষয়গুলো...",
    date: "১০ সেপ্টেম্বর, ২০২৫",
    category: "SEO",
    image: "🔍"
  },
  {
    id: 5,
    title: "ছোট ব্যবসার জন্য ডিজিটাল সলিউশন",
    excerpt: "ছোট ব্যবসা কিভাবে ডিজিটাল প্রযুক্তি ব্যবহার করে বড় হতে পারে? জানুন বিস্তারিত...",
    date: "৫ সেপ্টেম্বর, ২০২৫",
    category: "ব্যবসা",
    image: "💼"
  },
  {
    id: 6,
    title: "কনটেন্ট মার্কেটিং এ সফল হওয়ার উপায়",
    excerpt: "মানসম্পন্ন কনটেন্ট তৈরি এবং মার্কেটিং করে কিভাবে সফল হবেন? জানুন প্রয়োজনীয় টিপস...",
    date: "১ সেপ্টেম্বর, ২০২৫",
    category: "কনটেন্ট",
    image: "✍️"
  }
];

const Blog = () => {
  return (
    <main className="max-w-6xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">আমাদের ব্লগ</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          ডিজিটাল মার্কেটিং, ওয়েব ডেভেলপমেন্ট এবং ব্যবসা সম্পর্কিত সর্বশেষ টিপস এবং গাইড
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <div key={post.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition">
            <div className="bg-gradient-to-br from-blue-100 to-purple-100 h-48 flex items-center justify-center text-6xl">
              {post.image}
            </div>
            <div className="p-6">
              <span className="text-xs font-semibold text-red-500 uppercase">{post.category}</span>
              <h3 className="text-xl font-bold text-gray-800 mt-2 mb-3">{post.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{post.excerpt}</p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500">{post.date}</span>
                <button className="text-red-500 font-semibold text-sm hover:text-red-600">
                  পড়ুন →
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <button className="bg-red-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-600 transition">
          আরও পোস্ট দেখুন
        </button>
      </div>
    </main>
  );
};

export default Blog;
