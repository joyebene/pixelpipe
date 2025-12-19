import React from "react";
import Link from "next/link";
import Input from "../shared/Input";
import Button from "../shared/Button";
import { TbArrowsSplit } from "react-icons/tb";
import AuthPageLayout from "./AuthPageLayout";

export interface InputConfig {
    id: string;
    label: string;
    name: string;
    type: string;
    autoComplete: string;
    required: boolean;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    maxLength?: number;
}

interface AuthFormProps {
    title: string;
    description?: string;
    onSubmit: (e: React.FormEvent) => void;
    inputs: InputConfig[];
    submitText: string;
    footerText?: string;
    footerLinkText?: string;
    footerLinkHref?: string;
    children?: React.ReactNode;
}

const AuthForm: React.FC<AuthFormProps> = ({
    title,
    description,
    onSubmit,
    inputs,
    submitText,
    footerText,
    footerLinkText,
    footerLinkHref,
    children,
}) => {
    return (
        <AuthPageLayout>
            <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md dark:bg-slate-800 mx-auto">
                <div className="flex items-center justify-center gap-2 w-full mb-6">
                    <div className="w-8 h-8 bg-linear-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center"><TbArrowsSplit size="22" color='lightgreen' /></div>
                    <h1 className="text-xl font-bold text-slate-900 dark:text-white">Pixel<span className="text-green-500">Pipe</span></h1>
                </div>
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                        {title}
                    </h1>
                    {description && (
                        <p className="mt-2 text-sm text-gray-600 dark:text-slate-400">
                            {description}
                        </p>
                    )}
                </div>
                <form onSubmit={onSubmit} className="space-y-6">
                    {inputs.map((input) => (
                        <Input key={input.id} {...input} />
                    ))}

                    {children}

                    <div>
                        <Button
                            type="submit"
                            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        >
                            {submitText}
                        </Button>
                    </div>
                </form>
                {footerText && footerLinkText && footerLinkHref && (
                    <p className="text-sm text-center text-gray-600 dark:text-slate-400">
                        {footerText}{" "}
                        <Link
                            href={footerLinkHref}
                            className="font-medium text-purple-600 hover:text-pink-700 dark:text-pink-400 dark:hover:text-pink-300"
                        >
                            {footerLinkText}
                        </Link>
                    </p>
                )}
            </div>
        </AuthPageLayout>
    );
};

export default AuthForm;