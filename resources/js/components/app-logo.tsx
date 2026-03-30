import AppLogoIcon from '@/components/app-logo-icon';

export default function AppLogo() {
    return (
        <>
            <div className="flex aspect-square size-8 items-center justify-center rounded-md bg-sidebar-primary text-sidebar-primary-foreground">
                <img src="https://preview.redd.it/angels-of-delusion-2-5-web-event-assets-v0-08au6kj3pmhg1.png?width=1080&crop=smart&auto=webp&s=3736ff3440e415ec704d5de7edf41ffa7ac72e17"/>
            </div>
            <div className="ml-1 grid flex-1 text-left text-sm">
                <span className="mb-0.5 truncate leading-tight font-semibold">
                    Aspirasi Siswa
                </span>
            </div>
        </>
    );
}
