import type { NextPage } from "next";
import Head from "next/head";
import { PostCard, Categories, PostWidget } from "../components";

const post = [
  { title: "React Testing", excerpt: "Learn React Testing" },
  { title: "React with Tailwind", excerpt: "Learn React with Tailwind" },
  { title: "React with Tasdwind", excerpt: "Learn React with Tasind" },
  { title: "React with Tailasdd", excerpt: "Learn React withasdilwind" },
];

const Home: NextPage = () => {
  return (
    <div className="container mx-auto px-8 mb-8 bg-gray-300">
      <Head>
        <title>NEXT JS TUTORIAL</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1">
          {post.map((post) => 
            <PostCard post={post} key={post.title} />
          )}
        </div>

        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-8"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
