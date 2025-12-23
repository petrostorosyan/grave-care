export interface IPackage {
    id: number;
    title: string;
    desc: string;
    price: string;
}

export const packagesData: IPackage[] = [
    {
        id: 1,
        title: "oneTimeVisit.title",
        desc: "oneTimeVisit.description",
        price: "20.000",
    },
    {
        id: 2,
        title: "monthlyCare.title",
        price: "50.000",
        desc: "monthlyCare.description",
    },
    {
        id: 3,
        title: "yearlyPackage.title",
        price: "160.000",
        desc: "yearlyPackage.description",
    },
];