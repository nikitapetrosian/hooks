import React, { useState } from "react";
import CollapseWrapper from "../common/collapse";
const AllComp = ({ children }) => {
    const [data, setData] = useState({});
    console.log(data);
    const handleChnge = (target) => {
        setData((prevState) => ({ ...prevState, [target.name]: target.value }));
    };
    return React.Children.map(children, (child) => {
        const count = React.Children.count(children);
        console.log(count);
        const config = {
            ...child,
            onChange: handleChnge,
            id: count
        };
        console.log(config);
        return React.cloneElement(child, config.id);
    });
};
const ChildrenExercise = () => {
    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть компоненты Списка. Вам необходимо к каждому из них
                добавить порядковый номер, относительно того, как они
                располагаются на странице. Вы можете использовать как{" "}
                <code>React.Children.map</code> так и{" "}
                <code>React.Children.toArray</code>
            </p>
            <AllComp>
                <Component />
                <Component />
                <Component />
            </AllComp>
        </CollapseWrapper>
    );
};

const Component = () => {
    return <div>Компонент списка</div>;
};

export default ChildrenExercise;
// Под вопросом
