const posts = [
    {
        id: 1,
        title: "The Future of Web Development",
        author: "Alex Morgan",
        date: "2024-03-15",
        category: "Technology",
        readingTime: "5 min",
        summary: "An in-depth look at how server-side rendering and client-side frameworks are converging.",
        content: "Web development is rapidly changing with new technologies emerging every day. The convergence of SSR and CSR offers the best of both worlds, providing fast initial loads and interactive experiences. In this post, we explore the latest trends, including React Server Components, Next.js, and how simple architectures like this MiniBlog still hold relevance today. We look at how AI is starting to influence code generation and how developers can stay ahead of the curve.",
        image: "https://placehold.co/800x600/6C63FF/FFF?text=Web+Dev"
    },
    {
        id: 2,
        title: "Mastering Docker for Developers",
        author: "Sarah Jenkins",
        date: "2024-03-12",
        category: "DevOps",
        readingTime: "8 min",
        summary: "Why containerization is essential for modern deployment workflows and how to get started.",
        content: "Docker simplifies the process of building, shipping, and running applications. By packaging your application with all its dependencies into a standardized unit for software development, you ensure consistency across environments. This guide walks you through creating Dockerfiles, docker-compose setups, and best practices for production. Containerization has revolutionized how we think about scaling and reliability.",
        image: "https://placehold.co/800x600/FF6584/FFF?text=Docker"
    },
    {
        id: 3,
        title: "The Art of User Interface Design",
        author: "Michael Chen",
        date: "2024-03-08",
        category: "Design",
        readingTime: "4 min",
        summary: "Exploring the principles of clean design, typography, and color theory.",
        content: "Great UI design is not just about making things look pretty; it's about creating intuitive and accessible experiences. We delve into whitespace, contrast, and hierarchy. Typography plays a massive role in readability and brand identity. Learn how to transform a functional site into a delightful one. Visual storytelling and micro-interactions are the keys to keeping users engaged.",
        image: "https://placehold.co/800x600/333/FFF?text=UI+Design"
    },
    {
        id: 4,
        title: "Understanding Node.js Event Loop",
        author: "Emily Watson",
        date: "2024-03-18",
        category: "Backend",
        readingTime: "10 min",
        summary: "Deep dive into the inner workings of Node.js and why it's so efficient for I/O tasks.",
        content: "Node.js is built on top of the V8 engine and uses an event-driven, non-blocking I/O model. This makes it light and efficient, perfect for data-intensive real-time applications. Understanding the phases of the event loop—timers, I/O callbacks, idle/prepare, poll, check, and close callbacks—is crucial for writing high-performance Node.js code.",
        image: "https://placehold.co/800x600/43a047/FFF?text=Node+JS"
    },
    {
        id: 5,
        title: "Sustainability in Digital Products",
        author: "Green Tech Collective",
        date: "2024-03-20",
        category: "Ethics",
        readingTime: "6 min",
        summary: "How to build digital solutions that are environmentally friendly and energy efficient.",
        content: "Every byte transferred and every CPU cycle used consumes energy. Digital sustainability is about optimizing our code, assets, and hosting to reduce the carbon footprint of our websites. From using lightweight formats like WebP to choosing green hosting providers, every small step counts toward a more sustainable digital future.",
        image: "https://placehold.co/800x600/00bcd4/FFF?text=Green+Tech"
    }
];

module.exports = posts;
