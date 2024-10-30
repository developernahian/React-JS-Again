import PriceOption from "../PriceOption/PriceOption";


const PriceOptions = () => {


    const priceOptions = [
        {
          "id": 1,
          "name": "Basic Plan",
          "price": 20,
          "features": [
            "Access to gym equipment",
            "Locker room access",
            "Free Wi-Fi",
            "Open gym hours only"
          ]
        },
        {
          "id": 2,
          "name": "Standard Plan",
          "price": 40,
          "features": [
            "Access to gym equipment",
            "Locker room access",
            "Free Wi-Fi",
            "Open gym hours",
            "2 free personal training sessions per month",
            "Access to group classes"
          ]
        },
        {
          "id": 3,
          "name": "Premium Plan",
          "price": 60,
          "features": [
            "All-day access to gym equipment",
            "Locker room with premium amenities",
            "Free Wi-Fi",
            "Unlimited group classes",
            "5 free personal training sessions per month",
            "Free entry to wellness workshops",
            "Access to steam room and sauna"
          ]
        },
        {
          "id": 4,
          "name": "VIP Plan",
          "price": 100,
          "features": [
            "24/7 access to all gym facilities",
            "Dedicated locker and towel service",
            "Priority booking for personal trainers",
            "Unlimited group classes",
            "Unlimited personal training sessions",
            "Nutrition consultation",
            "Access to VIP lounge and amenities",
            "Discounts on merchandise and partner services"
          ]
        }
      ]
      


    return (

        

        <div className="m-12">
            <h2 className="text-3xl">Best Prices in the town</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {
                priceOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
            }
            </div>
        </div>
    );
};

export default PriceOptions;