export default function Meals({ params }) {
    return (
        <main>
            <h1 style={{ color: 'white', textAlign: 'center' }}>
                {params.mealSlug}
            </h1>
        </main>
    );
}
