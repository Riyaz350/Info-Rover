"use client"
const Title = (title) => {
    console.log(title)
    return (
        <div>
            <h1 className=" text-3xl font-bold">{title.title}</h1>
            <h1 className=" w-fit text-lg font-medium">{title.subTitle}</h1>
        </div>
    );
};

export default Title;