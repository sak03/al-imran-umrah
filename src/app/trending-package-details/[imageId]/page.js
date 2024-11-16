// "use client"
import { trendingDatas } from "@/utils/app-datas/trendingData"
import Image from 'next/image';


const TrendingPackageDetails = async ({ params }) => {
    const imageId = (await params).imageId
    const filteredImage = trendingDatas.filter((item) => item.id === imageId);

    return (
        <div className="trending-details-body">
            <div className="flex justify-between my-2">
                <span className="text-2xl">Trending Packages Details</span>
            </div>
            <div className="grid grid-cols-1 gap-4">
                {filteredImage.length > 0 ? (
                    filteredImage.map((item, idx) => (
                        <Image
                            key={idx}
                            src={item.imgUrl}
                            alt={item.name}
                            width={300}
                            height={350}
                            className="package-detail-image"
                        />
                    ))
                ) : (
                    <p>No matching data found for this package.</p>
                )}
            </div>
        </div>
    )
}

export default TrendingPackageDetails