import React from "react";
import './Catalog.css'
import {CatalogList} from "../CatalogList/CatalogList";

export class Catalog extends React.Component {
    render() {
        return (
            <section className='catalog'>
                <h1 className='catalog__title'>PerfumeBox — это новый бренд</h1>
                <p className='catalog__subtitle'>PerfumeBox представлен 10 ароматами. Самый ранний аромат этого бренда в
                    нашей энциклопедии создан в 2019 году, последний — в 2023-м. PerfumeBox работали с такими
                    парфюмерами как Anna Ivanova, Tatiana Naumova, Julia Kupriyanova и Andrey Chibisov.Ароматы можно
                    продегустировать и приобрести в магазине Osmodeus Perfume Shop. Адрес: Москва, Сокольническая
                    площадь, д. 9А ТЦ "Престиж-М" 2-й этаж, пав. 224-1</p>
                <CatalogList/>
            </section>
        )
    }
}