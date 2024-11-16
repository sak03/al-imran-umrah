import { offerData } from "@/utils/app-datas/offerDatas"
import Image from 'next/image';

export async function generateStaticParams() {
    return offerData.map((item) => ({
        offerId: item.id,
    }));
}

const page = async ({ params }) => {
    const offerId = (await params).offerId
    const filteredOffer = offerData.filter((item) => item.id === offerId);
    
    return (
        <div className="trending-details-body">
            <div className="flex justify-between my-2">
                <span className="text-2xl">Special Offer Details</span>
            </div>
            <div className="grid grid-cols-1 gap-4">
                {filteredOffer.length > 0 ? (
                    filteredOffer.map((item, idx) => (
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
                    <p>No matching data found for this offer.</p>
                )}
            </div>
        </div>
    )
}

export default page