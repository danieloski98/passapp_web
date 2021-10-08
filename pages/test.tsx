import React from 'react';

const Testing = () => {
    // const fileReader = React.useRef(new FileReader).current;
    // const [file, setFile] = React.useState('' as any);

    // React.useEffect(() => {
    //     fileReader.addEventListener('load', () => {
    //         setFile(fileReader.result);
    //         console.log(fileReader.result);
    //     })
    // }, [fileReader, setFile]);

    // const change = (e: any) => {
    //     const ffile = e.target.files[0];
    //     console.log(e.target.files[0]);

    //     fileReader.readAsDataURL(ffile);
    // }
    return (
        <div className="w-full h-screen flex justify-center items-center">
            {/* <input type="file" name="file" onChange={change} id="" /> */}
        </div>
    )
}

export default Testing;