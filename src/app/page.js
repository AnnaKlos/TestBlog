import { Header, PostCard, Categories, PostWidget } from "@/components";

const posts = [
  {
    title: "First post",
    excerpt: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    title: "Second post",
    excerpt:
      "Itaque numquam enim labore, dicta voluptatum saepe quasi ea unde fuga aliquid possimus.",
  },
];

export default function Home() {
  return (
    <main className="container mx-auto px-10 mb-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1">
          {posts?.map((post, index) => (
            <PostCard key={index} post={post} />
          ))}
        </div>
        <div className="lg:col-span-4 col-span-1">
          <div className="lg:stick relative top-8">
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </main>
  );
}
