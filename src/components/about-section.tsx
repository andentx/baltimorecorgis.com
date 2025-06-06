import { PortableText } from "next-sanity";
import { sanityFetch } from "@/sanity/lib/live";
import { ABOUT_US_QUERY } from "@/sanity/lib/queries";

export async function AboutSection() {
  const { data } = await sanityFetch({ query: ABOUT_US_QUERY });
  return (
    <section className="mb-20 flex w-full flex-col items-center justify-center px-6 md:px-12">
      <h1 className="mb-12 text-center font-gillSans text-5xl text-white">
        {data?.title}
      </h1>
      <div className="flex max-w-screen-xl flex-col md:flex-row-reverse">
        {data?.body && data.body.length > 0 && (
          <div className="mb-8 flex max-w-screen-lg justify-center text-xl text-white md:mb-0 md:text-2xl">
            <PortableText value={data.body} />
          </div>
        )}
        <div className="flex items-center justify-center md:mr-12 md:items-start">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="180"
            zoomAndPan="magnify"
            viewBox="0 0 1350 1349.999938"
            height="180"
            preserveAspectRatio="xMidYMid meet"
            version="1.0"
            className="h-24 w-24 md:h-44 md:w-44"
          >
            <defs>
              <clipPath id="48ec64ff63">
                <path
                  d="M 13.5 13.5 L 1336.5 13.5 L 1336.5 1336.5 L 13.5 1336.5 Z M 13.5 13.5 "
                  clipRule="nonzero"
                />
              </clipPath>
              <clipPath id="3406839f05">
                <path
                  d="M 675 13.5 C 309.664062 13.5 13.5 309.664062 13.5 675 C 13.5 1040.335938 309.664062 1336.5 675 1336.5 C 1040.335938 1336.5 1336.5 1040.335938 1336.5 675 C 1336.5 309.664062 1040.335938 13.5 675 13.5 "
                  clipRule="nonzero"
                />
              </clipPath>
              <clipPath id="b9385b8cf2">
                <path
                  d="M 313 288 L 1027 288 L 1027 1054 L 313 1054 Z M 313 288 "
                  clipRule="nonzero"
                />
              </clipPath>
              <clipPath id="2f1097fdbe">
                <path
                  d="M 197.960938 465.914062 L 914.992188 208.949219 L 1155.050781 878.808594 L 438.019531 1135.769531 Z M 197.960938 465.914062 "
                  clipRule="nonzero"
                />
              </clipPath>
              <clipPath id="b979d484ce">
                <path
                  d="M 197.960938 465.914062 L 914.992188 208.949219 L 1155.050781 878.808594 L 438.019531 1135.769531 Z M 197.960938 465.914062 "
                  clipRule="nonzero"
                />
              </clipPath>
            </defs>
            <g clipPath="url(#48ec64ff63)">
              <g clipPath="url(#3406839f05)">
                <path
                  fill="#49326b"
                  d="M 13.5 13.5 L 1336.5 13.5 L 1336.5 1336.5 L 13.5 1336.5 Z M 13.5 13.5 "
                  fillOpacity="1"
                  fillRule="nonzero"
                />
              </g>
            </g>
            <g clipPath="url(#b9385b8cf2)">
              <g clipPath="url(#2f1097fdbe)">
                <g clipPath="url(#b979d484ce)">
                  <path
                    fill="#fefefe"
                    d="M 683.351562 292.703125 C 681.890625 293.246094 680.414062 293.855469 678.964844 294.507812 C 623.164062 325.949219 612.75 399.792969 627.652344 456.28125 C 638.550781 508.476562 683.609375 564.433594 742.820312 555.785156 C 751.371094 554.421875 759.445312 550.75 766.523438 545.847656 C 825.113281 499.976562 826.96875 411.460938 794.25 350.417969 C 776.527344 309.769531 728.539062 275.859375 683.347656 292.703125 Z M 432.320312 385.671875 C 395.6875 399.8125 380.175781 447.183594 386.804688 484.117188 C 399.191406 557.550781 461.675781 631.917969 542.21875 627.683594 C 549.554688 626.707031 556.65625 624.332031 563.160156 620.816406 C 609.410156 595.101562 610.710938 533.15625 592.890625 489.910156 C 570.621094 432.425781 516.09375 376.265625 449.300781 381.792969 C 443.207031 382.328125 437.558594 383.65625 432.324219 385.679688 Z M 915.578125 433.664062 C 853.003906 460.355469 831.773438 539.128906 846.625 600.253906 C 853.386719 645.757812 896.648438 694.355469 946.878906 680.179688 C 1014.929688 654.851562 1035.683594 565.9375 1015.355469 503.117188 C 1004.953125 460.476562 962.597656 419.375 915.578125 433.664062 Z M 361.015625 648.195312 C 333.730469 657.710938 312.753906 683.402344 313.660156 713.921875 C 316.152344 795.539062 396.957031 871.082031 480.800781 858.378906 C 515.476562 852.191406 535.308594 817.074219 532.710938 784.304688 C 527 714.269531 465.132812 652.746094 395.027344 645.15625 C 383.367188 643.246094 371.695312 644.484375 361.019531 648.207031 Z M 694.609375 676.597656 C 641.328125 695.816406 596.757812 741.976562 576.5 794.171875 C 555.839844 853.949219 544.648438 918.90625 553.6875 981.765625 C 554.277344 1029.132812 604.574219 1065.863281 650.269531 1049.816406 C 705.660156 1031.667969 739.453125 977.539062 793 955.230469 C 836.773438 931.671875 886.734375 940.617188 933.917969 941.285156 C 974.703125 943.566406 1021.59375 920.285156 1026.171875 876.121094 C 1026.628906 832.613281 991.015625 799.15625 961.445312 771.261719 C 906.226562 728.570312 847.472656 683.957031 777.082031 670.175781 C 748.730469 664.261719 720.632812 667.210938 694.609375 676.597656 Z M 694.609375 676.597656 "
                    fillOpacity="1"
                    fillRule="nonzero"
                  />
                </g>
              </g>
            </g>
          </svg>
        </div>
      </div>
    </section>
  );
}
