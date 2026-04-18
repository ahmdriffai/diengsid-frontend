import clsx from 'clsx';

type SelectCardProps = {
    title: string;
    description?: string;
    icon?: React.ReactNode;
    selected?: boolean;
    onClick?: () => void;
};

export function SelectCard({ title, description, icon, selected, onClick }: SelectCardProps) {
    return (
        <div
            onClick={onClick}
            className={clsx(
                'flex cursor-pointer flex-col items-start justify-start rounded-2xl border p-5 transition-all',
                selected ? 'border-black bg-black/5 ring-1 ring-black' : 'border-gray-300 hover:border-black',
            )}
        >
            {icon && <div className="mb-1 flex min-w-10 items-center justify-center text-2xl">{icon}</div>}

            <div className="">
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="mt-1 text-sm font-normal text-gray-500">{description}</p>
            </div>
        </div>
    );
}
