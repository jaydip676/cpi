import DataTable from "@/components/common/DataTable";
import Header from "@/components/layout/Header";
import { getItem } from "@/lib/utils/fetchDataOnServer";
import { Suspense } from "react";

const optimism: React.FC = async () => {
    let initialDataOptimism = [];
    initialDataOptimism = await getItem();
    return (
        <div className="bg-dark-gray">
            <Header />
            <div className="container mx-auto pb-4 flex flex-col bg-dark-gray">
                <h1 className="font-mori font-semibold text-[#fffce1] text-2xl md:text-4xl lg:text-6xl tracking-tight text-center my-6 md:my-12">OP Delegates</h1>
                {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 m-4 md:gap-8 md:m-8 min-h-[100vh]"> */}
                <div className="custom-scrollbar">
                    <Suspense fallback={<>Loading...</>}>
                        <DataTable initialData={initialDataOptimism} background="bg-optimism" platform="optimism" member={true} iconURL="/assets/images/op_small.svg" />
                    </Suspense>
                </div>
                {/* </div> */}
            </div>
        </div>
    )
}

export default optimism;