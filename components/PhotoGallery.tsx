import React from 'react';

const PhotoGallery = () => {
  return (
    <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
      <div className="flex flex-wrap justify-between gap-3 p-4">
        <p className="text-[#0c1c17] tracking-light text-[32px] font-bold leading-tight min-w-72">A Life in Pictures</p>
      </div>
      <h3 className="text-[#0c1c17] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">Early Years</h3>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
        <div className="flex flex-col gap-3">
          <div
            className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg"
            style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCkLJyQth87BmARCuIS4C6tk3dpNlczltzdo9cv7Jt3EUEGNRTOuziBtSIwnUhAHsM1pfAsz1sXkXKjj9nLDYColEHMYBZmPUM3G_S4zZGSWmjVfnuRG3bssQ4wNUi94QTIE-Xs692npwB15lOmhcppIAoreCBAJk8RljGYH9ZskpTamvfPdzRogxcknzebOGWDrNjMDl5G9l4kTanVWeuVUEWsX_V3SsHA99Wdmb9MZBvMyja2GpP3ngVL49bLWHsw0iqOvKyuTUs")' }}
          ></div>
        </div>
        <div className="flex flex-col gap-3">
          <div
            className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg"
            style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBTp9t2YlglWpAH3GaWAqCvytb7S3XKvqmW7SwbQndMVPi85WGY2JJRXO-6kqsMN_MBxBvHlf1MsseaL9Ad1y8CNk7o7TM3_CgJ3q8JofvXwZoxY48xLgNkGtXKwzMMO9hYLAgsyBeNy-epbzQt3hpyKYUV7nxMqr66V0BEufFvX6RQoHt73qKtdBPbpbE9YVrb7NcQ6khNRDxrjKnz5Bl-tOP7TRkHx6cwfeMMQiTbCPj5-kR1XDINzCBtKzwD8VcRZfxWbIdxqNE")' }}
          ></div>
        </div>
        <div className="flex flex-col gap-3">
          <div
            className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg"
            style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuATgIY8iJuXJDybnBbXU-hUYUGSXTjqNmktDOz-WPPQdMsIEXG_kxjNp930FK-pJ8HD7Qfd_QddUP3tmAtdrAVEzraynFD7_OY3-wgmM0LgqnufAACPcxUgCtusMDfA9tf0Ix9lAAC6nDvH2wQatjuOPlHxm32DoPFK0RXyql948VRXM8gPMvfDvodUaUWCEY04oOArFp-8FE6X2PEk40xPRC6Iz9dmfAJLGayB-cwL3xp9naGtC1wusSdZZ-RGryAsxznP5zhYBHg")' }}
          ></div>
        </div>
        <div className="flex flex-col gap-3">
          <div
            className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg"
            style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAVpQt8mVGNNtFF7Go3WMDsFh23bvziL5llHCY4laJpbxrnjqhVlIIGrVuHWzqB1ESPUbxoNC9LQU5AAxHXa2u26ruVHmp-cr7F4ILa6ouGnQvkwooUphrSBWzsM4CSHqQmx9BAJUXMMUNSa3qa4TmnNIFfpodgTDok6Qi2gw7Kv3e-xSnUPvlD_XJSS8K32LlMgsYsdi-oDuV_00KGZboRRWrSaONA-sg3KErUS7bEhtcufZlGNUXLxFZ7jkwJhDAebhlrCianYc")' }}
          ></div>
        </div>
      </div>
      <h3 className="text-[#0c1c17] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">Adventures</h3>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
        <div className="flex flex-col gap-3">
          <div
            className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg"
            style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAk6ZNjb9TmArdhyMZ0zQeB6ydddXSi91MH__vmNawHdwtrkAENCkkjGwXCNKiNavRBn7dNzOh-t0FayQNEHkD_2_he0rWjB3PvaQV9yQXzynSSr3gRaUDp7-b5O1wARIRapaFv3YlpQTlI0QSiEeO0RLpb7dBmbu8IpCgrU4xPXiinVGkvZNs9EUYhIzBf8W05ZSmeNW7bxGs4QcH5gqhMUCdKtkB_s1zTOauEQy3OilgVS-K_c31CJmWLcyclwh0YqHDd2lh9nE")' }}
          ></div>
        </div>
        <div className="flex flex-col gap-3">
          <div
            className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg"
            style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDJr1ypMWC5hM26EmMAzJER828FWbtH3wa7KdYbtn6X7n_hZ2i1EXkkDa4dYESiuTOcb8GIKJsJAD9hkDlT1TC-AXz9K0ZqAUEAijGlGLhXiCoIZ2lBb5O_xvowC-2Rnymx1A5U18-NwkkF5fT-t6RJFd7olYayWMFNsp316c4eCHt5m91-K4zvHe9cQaqOmXM2eHrtoGudICWVK3cm7MI-4wPScWKYXgJIsjBEEuU2xMSJ8ExI5nVilXFy1mXEcfUaNLY-mDVIhNw")' }}
          ></div>
        </div>
        <div className="flex flex-col gap-3">
          <div
            className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg"
            style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCkFOpGpjuxoL77utLAvC9noV9a20LTaT8aD7mRIEEkB2aUn1VEk0VJfyFxdqSOmMhSh3mt0fUfiaIdJ_I7sGuvWnQUB9SkoZNrra63JjWJvYWwp7W9lq3rki7PvB-x4l46622a-nSghHsNBMMnuApmsg0izbjGgk6ZTMJmu3eoXitheA99tUlKSP3rWIvT-5A4CtKXMEeJ-diGgExEvWBeVCcl9DYR5sAxJ7nc-nGc84Zu_O_g6IeAmS5oT2GRIxIv2XiSl2SxgD0")' }}
          ></div>
        </div>
        <div className="flex flex-col gap-3">
          <div
            className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg"
            style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDJ2cmnh-5riXa3hg0wWkNwuT15AWxi-vyM7ErHMsbLKBNSvIncGbCaBRN5VvvFXBXsEGB_YbCG4WfPoTdF_dwKSiwjvFVaTstapOyyg9F9RQVFvdX0wZMIXnlUE0R5zA7lD9w7p5hmUJlB_hOPcdBDZnAiSPJTx1E1AmRNK_LH_4MCZh2lYeI95ZUSfIPj5JVnWz0N4Y1lh7sn9JPXYPRZTgucZ7XhAJFZiOpioOsKVRdryibxYpUrE_aSQdaxJi84ZAa0_bx5rbM")' }}
          ></div>
        </div>
      </div>
      <h3 className="text-[#0c1c17] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">Family</h3>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
        <div className="flex flex-col gap-3">
          <div
            className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg"
            style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD-wu0fUOadUNmopFuOX1_i8dlUgVpxtreFsekokNMsNAUNUKoBKVzWOGtvV3brel7nYsHe6ni66FaVy2whHllARZVtH7gapNz7JV9n6RafNsy9bJOQVQNrdEHfbZmcTOp54a_lF2VwRPQsywxErlLGrCyK939a4vyaLPriEZky-5WkeXw41IXo5VGd3rNyxQEU4agw5wsE3q81JZRuXNR8GRrcfYx2hbPl8ZXeVE7lLh1N-g2kbfH-exCqGb1e7SprZaW7O4BPE8w")' }}
          ></div>
        </div>
        <div className="flex flex-col gap-3">
          <div
            className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg"
            style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCGaLBqyH3vC3gZJhyC6XoiWoiTmmDD5r-nMGPYcTdwYPAlPbZMRx0uaYG3zAfR5KAU4dwmPtBMSPjbrUJCG2Hf5QB2U8Dfxs-qbYIiRHZleYfdR2Mj7PCw_ddq72AITjQlMd_6cPImPSRBw0Na0JI1HCD25x7SiCONwp8ll6KeQiLn3NlTPwvh0u19sb4ucTdOFx2GwcM6AYvdbSRdYMqBiCJrmeJXuwDEmoO4M0C5RI_7go1gcEtHm44MxCUcmIvA_WkpMWm-DDE")' }}
          ></div>
        </div>
        <div className="flex flex-col gap-3">
          <div
            className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg"
            style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAeTRq-2dPSn55Ak5yce-953f5PB3C92wGA1UiWNXFW70sU2TwlWV2NrF3Cvwkl2Jtng96r_a3wJjXtadUEofq-qibYngg457oV3nhjSN5aZKRBgZm3UrhN06xUcfey8OgleqCZRsarulU817il16xP2yYYfq6DtvGZ49MGj1i60hSAng2umfbB-YOeIuYBIqwk-cE1R8qW6Py58YaccHlbU2ADTO6rwmVzdEJA9JH6ON9fbjeyUycBLjmf6Y262bDvjjuvphFW5Q0")' }}
          ></div>
        </div>
        <div className="flex flex-col gap-3">
          <div
            className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg"
            style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCoaiU_TvIlnLiPiul3Izh2vwRX2iqRLWt2TgWTtF_umarQQXZ-VAI9qshwYAUyMWzZhRhZV3TZxicjkjMTG49L-BAYGBX2IkuAQ54D_d70zUaMH57iEGu_TcaNjh2iwq4k3Z-D33F5wQob2rAiUAFWK252DvNaby9awwbBXFKtYZgvmHmChDqJuR9BB7Ei77oS0QSE5wUk00_XFSFjLICyWCFEMkIt7Zg1jpHukh9ojWRxCipc75q6J3dVw0Vkl__gUDFjS6gfVw")' }}
          ></div>
        </div>
      </div>
      <h3 className="text-[#0c1c17] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">Later Years</h3>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
        <div className="flex flex-col gap-3">
          <div
            className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg"
            style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAkpbUe9f06bCZIX4FNN2HaCeuL332r8xvbPofCpUJcK5oBXdpjYpwhxS5t_CMO8ZtnoBPnx62tZ-0pRlTW_BfNF-oIpJ_tEth1D_Pb1TvTJs1Ph0rvsIOnggObWWXdbMyr1CUEkw3SMt_ng6D00p0ZImte-ZkmxdmUUx6oeRXgzdACAAlaBOvrZJv11LeQ597jnELgiJG0wSyy8wFcbPRWm5aVmJdn0AwI2CV4FhNMeecLhZZ5jEXXmhEy7l0ukhc9absDv64hxMM")' }}
          ></div>
        </div>
        <div className="flex flex-col gap-3">
          <div
            className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg"
            style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuC2efU2nX2xsHriaNSXU71W_cwWvxjXkW_aI7eeHoES1yFx_CRoD6oEBDyeScobs3inPCK6LG0OWUnReYTv6CSuhY8KmbHwrcKI9XZm6drZtrvkoEq7Ked5jrV_S6ccBTORu5bDMsSzRyz_sXTTLiMbWR4jPR21qlC50bSTfJ3Ry7s7BUwzpa8lf4A2HNNraeSoEw3vs1RJ9gBpTaFcxsm3Of87cFS_HvTm94VxETnkzesDdu6ZSyeWJ1XjY8SYfAnV6VqXHENHNsU")' }}
          ></div>
        </div>
        <div className="flex flex-col gap-3">
          <div
            className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg"
            style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD6UF6dECpgB16a8d133bkWBUHgDb9JxFWEW_4bk_FkzxN35ohL91zZ1DcC5X1BtVHCrP_VTdfHL_L5gT-OU6DjTpt4NfQEJ8DvWFdvwyDnZQINisjn3GFTXQxm4mNB4tRe7oABhndutzDB2L2jkAysfY2xHgzYmShLfC-kNTLoeORjfmgCOPJJoxdOagtR20FCs2FUSgYMZyQNR_DxJMdbOyK3uxRy36QJfXqlEWBm065w0_rO9Zx_9jkzacATV9x2K9kFUP1zBg0")' }}
          ></div>
        </div>
        <div className="flex flex-col gap-3">
          <div
            className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg"
            style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCmQvyNLh1VQ8V0B62RUGSXKWhh88VwWp1WlK3V_-I6nuFYO6PhWo4YrzjrauCqRFJdvcJS-H9cHMLTNipwscQUfKhfESBUR9zQAYtx9azhhAG3axK-tLkw1VECQEDFp4gBFZpbwI5PClpuK99fGctd9GfDqq1UziIoUxubFFk03Jy7h5Y8r0lBwsrhqJ5Npxl-3fHHDwc_0EcnoIrNYFbaaq-gl6h7Q7-G0GA645UBzC8bKDIb8-BqE_CgL4HCFnPDyiTe4Ij9CdQ")' }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default PhotoGallery; 