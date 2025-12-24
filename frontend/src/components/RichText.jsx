import { BlocksRenderer } from '@strapi/blocks-react-renderer';

export default function RichText({ content }) {
  if (!content) return null;

  return (
    <div className="rich-text">
      <BlocksRenderer content={content} />
    </div>
  );
}
