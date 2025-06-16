import FeaturedCard from "@/components/featured-card";
import { getRandomImage } from "@/lib/images";

export default function Home() {
  return (
    <div className="flex mx-auto container h-1/2 py-8">
      <FeaturedCard src={getRandomImage()} alt="vintage photo" />
    </div>
  );
}
