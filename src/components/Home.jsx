import CardSection from "./home_components/CardSection";
import Carousels from "./home_components/Carousels";
import { Counters } from "./home_components/Counters";
import { TypeOfDonation } from "./home_components/TypeOfDonation";

export function Home() {
    return(
        <>
            <Carousels></Carousels>
            <Counters></Counters>
            <CardSection></CardSection>
            <TypeOfDonation></TypeOfDonation>
        </>
    )
}