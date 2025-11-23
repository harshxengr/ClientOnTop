"use client";

import { useOrganization } from "@clerk/nextjs";
import { ReactNode } from "react";
import { AuthLayout } from "@/modules/auth/ui/layouts/auth-layout";
import { OrgSelectionView } from "@/modules/auth/ui/views/org-selection-view";

export const OrganizationGuard = ({ children }: { children: ReactNode }) => {
    const { organization } = useOrganization();

    if (!organization) {
        return (
            <AuthLayout>
                <OrgSelectionView />
            </AuthLayout>
        )
    }

    return (
        <>
            {children}
        </>
    )

}