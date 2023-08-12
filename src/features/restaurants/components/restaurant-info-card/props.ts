export interface RestaurantInfoCardProps {
	restaurant: {
		name: string;
		icon: string;
		photos: string[];
		address: string;
		isOpenNow: boolean;
		rating: number;
		isClosedTemporarily: boolean;
	};
}
