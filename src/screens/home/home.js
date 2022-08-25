import LoginScreen from "../login/LoginScreen";
import { HeaderMiddle } from "./HeaderMiddle";

export default function Home(){

    return (
    <>
    <HeaderMiddle links={[{label:'CD\'s',link:'cds'}]}/>
    <LoginScreen/>
    </>
        
    
    )
}