import React, { useEffect } from "react";
import "./SuccessCmp.scss";
import Button from "../../atoms/Button/Button";
import html2pdf from 'html2pdf.js';
import PDF from "../PDF/PDF";
import { useLocation } from "react-router-dom";
import { useCart } from "../../../context/CartContext";

function SuccessCmp() {
    const { state } = useLocation();
    const { setCart, setCartValue } = useCart();
    const { subTotal, discount, total } = state;
    
    const getGeneratedPdf = (e) => {
        e.preventDefault();
        const content = document.querySelector('#pdf-wrapper__content');
    
        const options = {
            margin: 42,
            filename: "transaction.pdf",
            image: { type: "jpeg", quality: 0.98 },
            html2canvas: { dpi: 192, scale: 2, letterRendering: true },
            jsPDF: { unit: "pt", format: "a4", orientation: "portrait" },
        };

        if (content) {
            html2pdf().from(content).set(options).toPdf().get('pdf').then(function (pdf) {
                const totalPages = pdf.internal.getNumberOfPages();
                for (let i = 1; i <= totalPages; i++) {
                    if (i >= 1) {
                        pdf.setPage(i);
                    }
                }
            }).save();
        }
    }

    useEffect(() => {
        setCart([]);
        setCartValue(0);
    }, []);

    return (
        <>
            <section className="success-main-container">
                <div className="success-wrapper">
                    <div className="success-animation-icon">
                        <svg className="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                            <circle className="checkmark__circle" cx="26" cy="26" r="25" fill="none" />
                            <path className="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
                        </svg>
                    </div>
                    <h3 className="success__title-msg">Your order is successfully place</h3>
                    <p className="success__desc">Pellentesque sed lectus nec tortor tristique accumsan quis dictum risus. Donec volutpat mollis nulla non facilisis.</p>
                    <div className="success__utility-btns">
                        <Button variant={"secondary"} label={"download pdf"} labelLevel={7} onClick={getGeneratedPdf} />
                    </div>
                </div>
                <PDF subTotal={subTotal} discount={discount} total={total} />
            </section>
        </>
    );
}

export default SuccessCmp;
