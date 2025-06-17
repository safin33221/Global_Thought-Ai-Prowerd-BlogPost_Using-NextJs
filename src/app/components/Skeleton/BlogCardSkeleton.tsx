"user client"

const BlogCardSkeleton = () => {
    return (
        <div className="border rounded-lg overflow-hidden shadow-md bg-card animate-pulse">
            {/* Cover Image Skeleton */}
            <div className="w-full h-64 bg-gray-200 dark:bg-muted"></div>

            {/* Content Section */}
            <div className="p-4 space-y-2">
                <div className="h-5 bg-gray-200 dark:bg-muted rounded w-3/4"></div>
                <div className="h-4 bg-gray-200 dark:bg-muted rounded w-full"></div>
                <div className="h-4 bg-gray-200 dark:bg-muted rounded w-5/6"></div>
                <div className="h-4 bg-gray-200 dark:bg-muted rounded w-4/6"></div>
            </div>

            {/* Footer Section */}
            <div className="border-t px-4 py-3 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gray-200 dark:bg-muted rounded-full"></div>
                    <div>
                        <div className="h-4 w-20 bg-gray-200 dark:bg-muted rounded"></div>
                        <div className="h-3 w-16 bg-gray-200 dark:bg-muted rounded mt-1"></div>
                    </div>
                </div>
                <div className="h-4 w-16 bg-gray-200 dark:bg-muted rounded"></div>
            </div>
        </div>


    );
};

export default BlogCardSkeleton;