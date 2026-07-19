import { GetStaticProps } from "next";
import Link from "next/link";
import { FC } from "react";

import Layout from "../../components/Layout";
import { getAllPosts } from "../../lib/api";
import { PostType } from "../../types/post";

type DocsProps = {
  posts: Pick<PostType, "slug" | "title">[];
};

const Docs: FC<DocsProps> = ({ posts }) => {
  return (
    <Layout
      customMeta={{
        title: "Docs - Robin PRO Image Gallery",
      }}
    >
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        Docs
      </h1>
      <p className="mt-6 mb-10 text-lg leading-8 text-gray-600">
        Guides and reference articles to help you get the most out of Robin PRO.
      </p>
      <ul className="divide-y divide-gray-100 border-t border-gray-100">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/posts/${post.slug}`}>
              <a className="group flex items-center justify-between py-4 text-lg">
                <span className="docs-underline font-medium text-gray-700 transition-colors duration-300 group-hover:text-gray-900">
                  {post.title}
                </span>
                <span
                  aria-hidden="true"
                  className="text-gray-300 transition duration-300 group-hover:translate-x-1 group-hover:text-primary"
                >
                  &rarr;
                </span>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllPosts(["title", "slug"]);

  return {
    props: { posts },
  };
};

export default Docs;
