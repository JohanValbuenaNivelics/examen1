import { Service } from "./service-api.model";

export interface Category {
    name:     string;
    slug:     string;
    icon:     string;
    services: Service[];
}