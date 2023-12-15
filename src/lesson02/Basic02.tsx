
// Simple of Props

interface EmpDetails {
    firstName : string;
    lastName : string;
    city : string
    phoneNumber : number
}

function FunctionalComponent(props:EmpDetails) {}

// If you want to make Optional

interface GpDetails {
    GpLocation : string;
    GpNumber : number;
    Gender?: string;
}

function Component({GpLocation, GpNumber}:GpDetails){}


