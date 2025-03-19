import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import InputField from '../Login/InputField';
import { CircleX } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { reset } from '../../Features/Slice';
import { updateDestination } from '../../Features/Action';

function EditDestination({ account, destination, setDestPopup }) {
    const success = useSelector(state => state.user.success);
    const error = useSelector(state => state.user.error);
    const pending = useSelector(state => state.user.pending);
    const dispatch = useDispatch();

    useEffect(() => {
        if (success) {
          setDestPopup('');
            dispatch(reset());
        } else if (error) {
            console.log(error, 'error');
        }
    }, [success, error]);

    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm();

    useEffect(() => {
        if (destination) {
            setValue('url', destination.url);
            setValue('http_method', destination.http_method);
        }
    }, [destination, setValue]);

    const onSubmit = (data) => {
        console.log("Form Data:", data);
        dispatch(updateDestination({...data, id:destination?.id, account:destination?.account}))
    };

    return (
        <div className="w-3/4 flex justify-center items-center pt-20 absolute">
            <div className="w-3/5 bg-[#2b323d4a]">
                <div className="w-full flex justify-end p-3">
                    <CircleX className="text-white cursor-pointer" onClick={() => setDestPopup('all_dests')} />
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center space-y-6 pb-9">
                    <h1 className="text-xl">{destination ? 'Edit Destination' : 'Create a Destination'}</h1>

                    <div className="w-full flex flex-col items-center gap-2">
                        <div className="w-full flex flex-col items-center">
                            <InputField label="Destination URL" type="url"
                                {...register('url', {
                                    required: 'Destination URL is required',
                                    pattern: {
                                        value: /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/,
                                        message: 'Enter a valid URL',
                                    },
                                })}
                            />
                            {errors.url && <p className="text-red-500 text-sm">{errors.url.message}</p>}
                        </div>

                        <div className="w-full flex flex-col items-center">
                            <InputField label="HTTP Method" type="text" placeholder={'eg: GET, POST, PUT, DELETE'}
                                {...register('http_method', {
                                    required: 'HTTP Method is required',
                                    validate: (value) => {
                                        const allowedMethods = ['GET', 'POST', 'PUT', 'DELETE'];
                                        return allowedMethods.includes(value.toUpperCase()) || 'Invalid HTTP method';
                                    },
                                })}
                            />
                            {errors.http_method && <p className="text-red-500 text-sm">{errors.http_method.message}</p>}
                        </div>
                    </div>

                    <div className='bg-violet-950 w-1/2 py-2 rounded-lg text-white flex justify-center gap-2 items-center'>
                        <button type="submit" className='w-full'>{destination ? 'Update' : 'Create'}</button>
                        {pending &&
                            <div className='w-5 h-5 border-4 border-gray-300 border-t-blue-600 rounded-full animate-spin'></div>
                        }
                    </div>
                </form>
            </div>
        </div>
    );
}

export default EditDestination;
