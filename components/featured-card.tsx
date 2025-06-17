import { getRandomImage } from "@/lib/images";
import Image from "next/image";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
export default function FeaturedCard({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-16 rounded-xl overflow-hidden w-2/3 mx-auto h-64 border-2">
      {/* Left Section */}
      <Card className="items-center relative rounded-xl p-0 col-span-2 flex flex-1 md:flex-row">
        <div className="w-1/3 flex-1">
          <h2 className="text-3xl font-semibold leading-tight">
            Made just for you!
          </h2>
          <p className="text-sm text-muted-foreground">
            Custom pieces you wont find elsewhere
          </p>
          <Button className="bg-black text-white hover:bg-neutral-800">
            Personalise now
          </Button>
        </div>
        <div className="relative w-2/3 h-full flex-1">
          <Image
            src={getRandomImage()}
            alt="Custom Crowns"
            fill
            className="object-cover rounded-r-lg rounded-l-full"
            priority
          />
        </div>
      </Card>

      {/* Right Section */}
      <Card className="relative p-0 rounded-xl overflow-hidden">
        <Image
          src={getRandomImage()} // replace with your actual image path
          alt="Engraving board"
          fill
          className="object-cover"
          priority
        />
        <CardContent className="absolute bottom-4 left-4 text-white">
          <h3 className="text-lg font-medium">Engraving</h3>
          <p className="text-sm underline">Shop Now</p>
        </CardContent>
      </Card>
    </div>
  );
}
