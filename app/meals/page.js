import Link from "next/link";

export default function MealsPage() {
    return (
        <>
            <h1 style={{ color: 'white', textAlign: 'center' }}>
                Meals Page
            </h1>
            <Link style={{ color: 'white', textAlign: 'center' }} href="/meals/share">Meals Share</Link>
        </>
    );
}
