import { NextPage } from 'next/'
import { Input, Spinner } from '@chakra-ui/react'
import * as yup from 'yup'
import { useFormik } from 'formik'
import React from 'react'
import url from '../../util/url'

const validationSchema = yup.object({
    fullname: yup.string().required('This field is required'),
    email: yup.string().email('Invalid email').required('This field is required'),
    message: yup.string().required('This field is required'),
})

const ContactForm: NextPage = () => {
    const [loading, setLoading] = React.useState(false);

    const formik = useFormik({
        initialValues: {fullname: '', email: '', message: ''},
        validationSchema,
        onSubmit: () => {}
    })

    const submit = async () => {
        if (!formik.isValid) {
            alert('Please filling the form properly')
        }
        if (!formik.dirty) {
            alert('Input an email address')
        }

        // submit
        setLoading(true);
        const request = await fetch(`${url}/messages`, {
            method: 'post',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(formik.values),
        });

        const json = await request.json();
        setLoading(false);
        if ( json.statusCode !== 200) {
            alert(json.errorMessage);
        }else {
            formik.resetForm();
            alert(json.successMessage);
        }
    }
    return (
        <div>
            <p className="text-2xl font-bold text-black">Contact us</p>
            <p className="font-light text-sm mt-3 text-gray-500">Get in touch with us and we’d be in touch shortly</p>

            <div className="w-full h-auto flex mt-4 xl:flex-row lg:flex-row md:flex-col sm:flex-col">
                <div className="xl:w-56 lg:w-56 md:w-full sm:w-full">
                    <Input background="#EFF2F6" placeholder="fullname" name="fullname" value={formik.values.fullname} onChange={formik.handleChange} onBlur={formik.handleBlur}  />
                    {formik.touched.fullname && formik.errors.fullname && (
                        <p className="mt-2 text-red-400 text-xs">{formik.errors.fullname}</p>
                    )}
                </div>
                <div className="xl:w-56 lg:w-56 md:w-full sm:w-full xl:ml-3 lg:ml-3 md:ml-0 sm:ml-0 xl:mt-0 lg:mt-0 d:mt-3 sm:mt-3">
                    <Input background="#EFF2F6" className="" placeholder="email" name="email" value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                    {formik.touched.email && formik.errors.email && (
                        <p className="mt-2 text-red-400 text-xs">{formik.errors.email}</p>
                    )}
                </div>
            </div>

            <textarea placeholder="Message" className="w-full h-24 rounded-md p-3 mt-5" style={{ backgroundColor: '#EFF2F6' }} name="message" value={formik.values.message} onChange={formik.handleChange} onBlur={formik.handleBlur} ></textarea>
            {formik.touched.message && formik.errors.message && (
                <p className="mt-2 text-red-400 text-xs">{formik.errors.message}</p>
            )}
            <button onClick={submit} disabled={loading} className="xl:w-56 lg:w-56 md:w-full sm:w-full h-12 rounded bg-light_blue text-white text-sm mt-5">
               { loading ? <Spinner size="sm" color="white" /> : <span> Send </span>}
            </button>
        </div>
    )
}

export default ContactForm;