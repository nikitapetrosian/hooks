import React, { useRef, useState } from "react";
import CollapseWrapper from "../common/collapse";
const UseRefExercise = () => {
    const inputRef = useRef();
    const [block, setBlock] = useState("Блок");
    const handleClickWidth = () => {
        inputRef.current.style.width = "80px";
        inputRef.current.style.height = "150px";
        setBlock("Text");
    };
    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть блок, у которого заданы ширина и высота. Добавьте
                кнопку, при нажатии которой изменятся следующие свойства:
            </p>
            <ul>
                <li>Изменится содежимое блока на &quot;text&quot;</li>
                <li>высота и ширина станут равны 150 и 80 соответственно</li>
            </ul>
            <div
                className="bg-primary d-flex flex-row justify-content-center align-items-center rounded"
                ref={inputRef}
                style={{
                    height: 40,
                    width: 60,
                    color: "white"
                }}
            >
                <small>{block}</small>
            </div>
            <button className="btn btn-secondary" onClick={handleClickWidth}>
                Изменить ширину объекта
            </button>
        </CollapseWrapper>
    );
};

export default UseRefExercise;
