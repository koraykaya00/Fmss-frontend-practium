import React from "react";

const Button = ({ type, children, onClick }) => {
    let buttonStyle, hoverStyle;

    // buttonStyle ve hoverStyle adlı iki değişken tanımlar, ancak bu değişkenlere herhangi bir değer atanmaz.
    // Bu değişkenler muhtemelen daha sonra kullanılmak üzere stil özellikleri içereceklerdir.

    switch (type) {
        case "primary":
            buttonStyle = {
                backgroundColor: "#408E91",
                color: "#fff",
                border: "none",
            };
            hoverStyle = {
                backgroundColor: "#40a9ff",
            };
            break;
        case "default":
            buttonStyle = {
                backgroundColor: "#EB455F",
                color: "#000",
                borderColor: "408E91",
            };
            hoverStyle = {
                backgroundColor: "#e6f7ff",
                borderColor: "#1890ff",
            };
            break;
        case "dashed":
            buttonStyle = {
                backgroundColor: "#fff",
                color: "#000",
                borderColor: "408E91",
                borderStyle: "dashed",
            };
            hoverStyle = {
                backgroundColor: "#e6f7ff",
                borderColor: "#1890ff",
            };
            break;
        case "text":
            buttonStyle = {
                backgroundColor: "#002B5B",
                color: "#fff",
                border: "none",
            };
            hoverStyle = {
                backgroundColor: "#e6f7ff",
            };
            break;
        case "link":
            buttonStyle = {
                backgroundColor: "#BDCDD6",
                color: "#1890ff",
                border: "none",
                textDecoration: "underline",
            };
            hoverStyle = {
                backgroundColor: "#e6f7ff",
            };
            break;
        default:
            buttonStyle = {
                backgroundColor: "#fff",
                color: "#1890ff",
                border: "none",
            };
            hoverStyle = {
                backgroundColor: "#e6f7ff",
            };
            break;
    }

    const handleClick = () => {
        alert("Button clicked!");
    };
    
// handleClick fonksiyonuna tıklantığında 'button clicked!' şeklinde alert bassın.

    return (
        <div style={{ marginTop: 40, textAlign: 'center' }}>
            <button
                style={{ ...buttonStyle, fontSize: "1.2rem", padding: "10px 20px" }}
                onMouseEnter={(e) => {
                    e.target.style.backgroundColor = hoverStyle.backgroundColor;
                }}
                onMouseLeave={(e) => {
                    e.target.style.backgroundColor = buttonStyle.backgroundColor;
                }}
                onClick={onClick ? onClick : handleClick}
            >
                {children}
            </button>
        </div>
    );
};

export default Button;
