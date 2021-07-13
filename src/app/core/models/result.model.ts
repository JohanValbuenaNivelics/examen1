import { ArticlesPymesTest } from "./articulo-pymes-test.model";
import { Category } from "./category.model";
import { Testimony } from "./testimony.model";
import { WhatImagesTest } from "./what-images-test.model";

export interface Result {
    title_ppal:          string;
    test_title:          string;
    test_description:    string;
    what_images_test:    WhatImagesTest[];
    articles_pymes_test: ArticlesPymesTest[];
    categories:          Category[];
    title_testimony:     string;
    testimony:           Testimony[];
}