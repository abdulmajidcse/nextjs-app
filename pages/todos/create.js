/* eslint-disable jsx-a11y/anchor-is-valid */
import { useFormik } from 'formik';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import { toast } from 'react-toastify';
import * as Yup from 'yup';
import Loading from '../../components/Loading';
import Meta from '../../components/Meta';

export default function TodoCreate() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(false);
    }, []);

    const formik = useFormik({
        initialValues: {
            title: '',
            note: '',
            comment: '',
        },
        validationSchema: Yup.object({
            title: Yup.string().required('Required'),
            note: Yup.string().required('Required'),
            comment: Yup.string().nullable(),
        }),
        onSubmit: (values, { setSubmitting, setErrors, resetForm }) => {
            setLoading(true);

            const data = JSON.stringify({
                title: values.title,
                note: values.note,
                comment: values.comment,
            });

            // request handle with javascrpt fetch
            fetch(`${process.env.API_URL}/todos`, {
                method: 'post',
                body: data,
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
                .then((response) => response.json())
                .then((response) => {
                    if (response.errors) {
                        setErrors(response.errors);
                    } else {
                        toast.success('Todo Created!');
                        resetForm();
                    }
                    setLoading(false);
                    setSubmitting(false);
                })
                .catch(() => {
                    toast.error('Something went wrong!');
                    setLoading(false);
                    setSubmitting(false);
                });
        },
    });

    return (
        <>
            <Meta title="Create Todo" />
            <Loading show={loading} />
            <div className="container my-3">
                <Card>
                    <Card.Header>
                        <span className="h4 me-4">Create Todo</span>
                        <Link href="/todos">
                            <a className="btn btn-sm btn-primary">Todo List</a>
                        </Link>
                    </Card.Header>

                    <Card.Body>
                        <Form onSubmit={formik.handleSubmit}>
                            <Form.Group className="mb-3" controlId="title">
                                <Form.Label>Title</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="title"
                                    value={formik.values.title}
                                    onChange={formik.handleChange}
                                />
                                {formik.errors.title && (
                                    <Form.Text className="text-danger">
                                        {formik.errors.title}
                                    </Form.Text>
                                )}
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="note">
                                <Form.Label>Note</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    rows={3}
                                    name="note"
                                    value={formik.values.note}
                                    onChange={formik.handleChange}
                                />
                                {formik.errors.note && (
                                    <Form.Text className="text-danger">
                                        {formik.errors.note}
                                    </Form.Text>
                                )}
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="comment">
                                <Form.Label>Comment</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="comment"
                                    value={formik.values.comment}
                                    onChange={formik.handleChange}
                                />
                                {formik.errors.comment && (
                                    <Form.Text className="text-danger">
                                        {formik.errors.comment}
                                    </Form.Text>
                                )}
                            </Form.Group>

                            <Button variant="primary" type="submit" disabled={formik.isSubmitting}>
                                Save
                            </Button>
                        </Form>
                    </Card.Body>
                </Card>
            </div>
        </>
    );
}
