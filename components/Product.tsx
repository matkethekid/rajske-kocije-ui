import Image from "next/image";
import Link from "next/link";

interface itemInCollection {
    id: number;
    title: string;
    preferredUrl: string;
    price: number;
    thumbnailImage: string;
    images: string[];
}

const Product = ({ index, item }: { index: number, item: itemInCollection }) => {
    return (
        <div key={index} className="w-full flex flex-col group cursor-pointer group relative mb-3 p-5 border border-gray-300/50 rounded-lg">
            <Link href={`/proizvod/${item.preferredUrl}`}>
                <div className="relative aspect-video w-full bg-[#f6f6f6] overflow-hidden">
                    <Image src={item.thumbnailImage} alt={item.title} fill className="object-cover rounded-md" sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" priority={index < 4}/>
                </div>
                <div className="mt-3 flex flex-col gap-3">
                    <h3 className="text-black font-medium text-2xl leading-tight">{item.title}</h3>
                    <span className={`font-bold line-clamp-3 text-gray-500`}></span>
                    <span className={`font-bold text-lg`}>{item.price == 0 ? "Na upit" : `${item.price}€`}</span>
                </div>
            </Link>
        </div>
    )
}

export default Product;