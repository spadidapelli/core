/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M32 6H4C3.46957 6 2.96086 6.21071 2.58579 6.58579C2.21071 6.96086 2 7.46957 2 8V28C2 28.5304 2.21071 29.0391 2.58579 29.4142C2.96086 29.7893 3.46957 30 4 30H32C32.5304 30 33.0391 29.7893 33.4142 29.4142C33.7893 29.0391 34 28.5304 34 28V8C34 7.46957 33.7893 6.96086 33.4142 6.58579C33.0391 6.21071 32.5304 6 32 6ZM4 28V8H32V28H4Z"/><path d="M13.33 13.35C12.4365 13.352 11.5635 13.6187 10.8216 14.1166C10.0796 14.6145 9.50178 15.3211 9.1612 16.1472C8.82063 16.9733 8.73254 17.8818 8.90807 18.7579C9.08361 19.6341 9.51488 20.4385 10.1474 21.0696C10.7799 21.7008 11.5853 22.1303 12.4619 22.3039C13.3384 22.4775 14.2467 22.3874 15.072 22.045C15.8974 21.7026 16.6027 21.1232 17.0989 20.3801C17.5952 19.637 17.86 18.7635 17.86 17.87C17.8574 16.6703 17.3789 15.5206 16.5297 14.6733C15.6804 13.8259 14.5297 13.35 13.33 13.35ZM13.33 20.79C12.7529 20.788 12.1893 20.6151 11.7105 20.293C11.2316 19.971 10.8589 19.5143 10.6394 18.9805C10.4199 18.4468 10.3635 17.86 10.4773 17.2942C10.5911 16.7285 10.87 16.2091 11.2788 15.8017C11.6875 15.3944 12.2079 15.1173 12.774 15.0054C13.3402 14.8935 13.9268 14.9519 14.4597 15.1732C14.9927 15.3945 15.4482 15.7688 15.7686 16.2488C16.089 16.7288 16.26 17.2929 16.26 17.87C16.26 18.2543 16.1841 18.6348 16.0368 18.9897C15.8894 19.3447 15.6734 19.667 15.4012 19.9383C15.129 20.2096 14.8059 20.4244 14.4505 20.5706C14.0951 20.7168 13.7143 20.7913 13.33 20.79Z"/><path d="M23.62 13.35C22.726 13.35 21.8521 13.6151 21.1088 14.1118C20.3655 14.6084 19.7862 15.3143 19.4441 16.1403C19.102 16.9662 19.0124 17.875 19.1868 18.7518C19.3613 19.6286 19.7917 20.434 20.4239 21.0661C21.056 21.6983 21.8614 22.1287 22.7382 22.3032C23.615 22.4776 24.5238 22.388 25.3497 22.0459C26.1756 21.7038 26.8816 21.1245 27.3782 20.3812C27.8749 19.6379 28.14 18.764 28.14 17.87C28.1374 16.672 27.6603 15.5239 26.8132 14.6768C25.9661 13.8297 24.818 13.3526 23.62 13.35ZM23.62 20.79C23.0425 20.79 22.4779 20.6187 21.9977 20.2979C21.5175 19.977 21.1433 19.521 20.9223 18.9874C20.7013 18.4539 20.6434 17.8668 20.7561 17.3003C20.8688 16.7339 21.1469 16.2136 21.5552 15.8052C21.9636 15.3969 22.4839 15.1188 23.0503 15.0061C23.6168 14.8934 24.2039 14.9513 24.7374 15.1723C25.271 15.3933 25.727 15.7675 26.0479 16.2477C26.3687 16.7279 26.54 17.2925 26.54 17.87C26.54 18.6444 26.2324 19.3871 25.6847 19.9348C25.1371 20.4824 24.3944 20.79 23.62 20.79Z"/><path d="M6 11V23.55H8V12H29.34V10H7C6.73478 10 6.48043 10.1054 6.29289 10.2929C6.10536 10.4804 6 10.7348 6 11Z"/>',

  outlineAlerted:
    '<path d="M21.9592 6H4C3.46957 6 2.96086 6.21071 2.58579 6.58579C2.21071 6.96086 2 7.46957 2 8V28C2 28.5304 2.21071 29.0391 2.58579 29.4142C2.96086 29.7893 3.46957 30 4 30H32C32.5304 30 33.0391 29.7893 33.4142 29.4142C33.7893 29.0391 34 28.5304 34 28V15.0261C33.8886 15.0352 33.7763 15.0387 33.6637 15.0364H32V28H4V8H20.7593L21.9592 6Z"/><path d="M19.5593 10H7C6.73478 10 6.48043 10.1054 6.29289 10.2929C6.10536 10.4804 6 10.7348 6 11V23.55H8V12H19.0073C18.9663 11.3176 19.1449 10.6282 19.5362 10.0385L19.5593 10Z"/><path d="M20.5496 14.5529C20.0729 14.9941 19.6948 15.535 19.4441 16.1403C19.102 16.9662 19.0124 17.875 19.1868 18.7518C19.3613 19.6286 19.7917 20.434 20.4239 21.0661C21.056 21.6983 21.8614 22.1287 22.7382 22.3032C23.615 22.4776 24.5238 22.388 25.3497 22.0459C26.1756 21.7038 26.8816 21.1245 27.3782 20.3812C27.8749 19.6379 28.14 18.764 28.14 17.87C28.1377 16.8341 27.7807 15.8354 27.1364 15.0364H24.3252C24.4652 15.0713 24.603 15.1166 24.7374 15.1723C25.271 15.3933 25.727 15.7675 26.0479 16.2477C26.3687 16.7279 26.54 17.2925 26.54 17.87C26.54 18.6444 26.2324 19.3871 25.6847 19.9348C25.1371 20.4824 24.3944 20.79 23.62 20.79C23.0425 20.79 22.4779 20.6187 21.9977 20.2979C21.5175 19.977 21.1433 19.521 20.9223 18.9874C20.7013 18.4539 20.6434 17.8668 20.7561 17.3003C20.8688 16.7339 21.1469 16.2136 21.5552 15.8052C21.9308 15.4297 22.4011 15.1643 22.9148 15.0364H22.3395C21.7041 15.0492 21.0824 14.8783 20.5496 14.5529Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M10.8216 14.1166C11.5635 13.6187 12.4365 13.352 13.33 13.35C14.5297 13.35 15.6804 13.8259 16.5297 14.6733C17.3789 15.5206 17.8574 16.6703 17.86 17.87C17.86 18.7635 17.5952 19.637 17.0989 20.3801C16.6027 21.1232 15.8974 21.7026 15.072 22.045C14.2467 22.3874 13.3384 22.4775 12.4619 22.3039C11.5853 22.1303 10.7799 21.7008 10.1474 21.0696C9.51488 20.4385 9.08361 19.6341 8.90807 18.7579C8.73254 17.8818 8.82063 16.9733 9.1612 16.1472C9.50178 15.3211 10.0796 14.6145 10.8216 14.1166ZM11.7105 20.293C12.1893 20.6151 12.7529 20.788 13.33 20.79C13.7143 20.7913 14.0951 20.7168 14.4505 20.5706C14.8059 20.4244 15.129 20.2096 15.4012 19.9383C15.6734 19.667 15.8894 19.3447 16.0368 18.9897C16.1841 18.6348 16.26 18.2543 16.26 17.87C16.26 17.2929 16.089 16.7288 15.7686 16.2488C15.4482 15.7688 14.9927 15.3945 14.4597 15.1732C13.9268 14.9519 13.3402 14.8935 12.774 15.0054C12.2079 15.1173 11.6875 15.3944 11.2788 15.8017C10.87 16.2091 10.5911 16.7285 10.4773 17.2942C10.3635 17.86 10.4199 18.4468 10.6394 18.9805C10.8589 19.5143 11.2316 19.971 11.7105 20.293Z"/><path d="M26.9039 1.64597L21.2222 11.1156C20.9526 11.4981 20.9281 11.9946 21.1588 12.4002C21.3896 12.8058 21.8363 13.0517 22.3148 13.0364H33.6881C34.1666 13.0517 34.6134 12.8058 34.8441 12.4002C35.0748 11.9946 35.0503 11.4981 34.7808 11.1156L29.0991 1.64597C28.8711 1.26889 28.4532 1.03711 28.0015 1.03711C27.5497 1.03711 27.1319 1.26889 26.9039 1.64597Z"/>',

  outlineBadged:
    '<path d="M8.81 17.87C8.80802 18.7668 9.07227 19.644 9.56927 20.3905C10.0663 21.137 10.7737 21.7191 11.6018 22.0632C12.43 22.4074 13.3416 22.4979 14.2213 22.3234C15.101 22.149 15.909 21.7173 16.5432 21.0832C17.1773 20.449 17.609 19.641 17.7834 18.7613C17.9579 17.8816 17.8674 16.97 17.5232 16.1418C17.1791 15.3137 16.597 14.6063 15.8505 14.1093C15.104 13.6123 14.2268 13.348 13.33 13.35C12.132 13.3526 10.9839 13.8297 10.1368 14.6768C9.2897 15.5239 8.81264 16.672 8.81 17.87ZM16.26 17.87C16.2719 18.4519 16.1103 19.0242 15.7956 19.5138C15.481 20.0035 15.0277 20.3884 14.4935 20.6194C13.9592 20.8504 13.3683 20.917 12.7961 20.8108C12.2238 20.7046 11.6961 20.4304 11.2803 20.0231C10.8645 19.6159 10.5795 19.094 10.4615 18.524C10.3435 17.9541 10.3979 17.3619 10.6178 16.823C10.8377 16.2841 11.2131 15.823 11.6961 15.4983C12.1792 15.1736 12.748 15.0001 13.33 15C14.0968 14.9998 14.8331 15.3003 15.3809 15.8369C15.9287 16.3734 16.2443 17.1034 16.26 17.87Z"/><path d="M19.1 17.87C19.1 18.764 19.3651 19.6379 19.8618 20.3812C20.3584 21.1245 21.0643 21.7038 21.8903 22.0459C22.7162 22.388 23.625 22.4776 24.5018 22.3032C25.3786 22.1287 26.184 21.6983 26.8161 21.0661C27.4483 20.434 27.8787 19.6286 28.0532 18.7518C28.2276 17.875 28.138 16.9662 27.7959 16.1403C27.4538 15.3143 26.8745 14.6084 26.1312 14.1118C25.3879 13.6151 24.514 13.35 23.62 13.35C22.422 13.3526 21.2739 13.8297 20.4268 14.6768C19.5797 15.5239 19.1026 16.672 19.1 17.87ZM26.54 17.87C26.5499 18.4495 26.3871 19.0189 26.0724 19.5057C25.7576 19.9924 25.3051 20.3744 24.7725 20.6031C24.2399 20.8318 23.6513 20.8968 23.0816 20.7899C22.5119 20.6829 21.987 20.4088 21.5736 20.0025C21.1602 19.5962 20.8771 19.0761 20.7603 18.5083C20.6435 17.9406 20.6984 17.3509 20.9178 16.8144C21.1373 16.2779 21.5114 15.8189 21.9927 15.4958C22.4739 15.1727 23.0404 15.0001 23.62 15C24.3858 14.9999 25.1211 15.3007 25.6673 15.8375C26.2135 16.3743 26.5269 17.1043 26.54 17.87Z"/><path d="M32 13.22V28H4V8H22.78C22.5953 7.34934 22.5011 6.67636 22.5 6H4C3.46957 6 2.96086 6.21071 2.58579 6.58579C2.21071 6.96086 2 7.46957 2 8V28C2 28.5304 2.21071 29.0391 2.58579 29.4142C2.96086 29.7893 3.46957 30 4 30H32C32.5304 30 33.0391 29.7893 33.4142 29.4142C33.7893 29.0391 34 28.5304 34 28V12.34C33.3789 12.7275 32.7053 13.0239 32 13.22Z"/><path d="M6 11V23.55H8V12H25.51C24.7788 11.4492 24.1522 10.7719 23.66 10H7C6.73478 10 6.48043 10.1054 6.29289 10.2929C6.10536 10.4804 6 10.7348 6 11Z"/><path d="M30 11C32.7614 11 35 8.76142 35 6C35 3.23858 32.7614 1 30 1C27.2386 1 25 3.23858 25 6C25 8.76142 27.2386 11 30 11Z"/>',

  solid:
    '<path d="M32 6H4C3.46957 6 2.96086 6.21071 2.58579 6.58579C2.21071 6.96086 2 7.46957 2 8V28C2 28.5304 2.21071 29.0391 2.58579 29.4142C2.96086 29.7893 3.46957 30 4 30H32C32.5304 30 33.0391 29.7893 33.4142 29.4142C33.7893 29.0391 34 28.5304 34 28V8C34 7.46957 33.7893 6.96086 33.4142 6.58579C33.0391 6.21071 32.5304 6 32 6ZM30 24H6V12H30V24Z"/><path d="M12.21 23C13.1989 23 14.1656 22.7068 14.9879 22.1573C15.8101 21.6079 16.451 20.827 16.8294 19.9134C17.2078 18.9998 17.3069 17.9945 17.1139 17.0245C16.921 16.0546 16.4448 15.1637 15.7455 14.4645C15.0463 13.7652 14.1554 13.289 13.1855 13.0961C12.2155 12.9031 11.2102 13.0022 10.2966 13.3806C9.38295 13.759 8.60206 14.3999 8.05265 15.2221C7.50325 16.0444 7.21 17.0111 7.21 18C7.21 18.6566 7.33933 19.3068 7.5906 19.9134C7.84188 20.52 8.21017 21.0712 8.67447 21.5355C9.61215 22.4732 10.8839 23 12.21 23ZM12.21 16C12.6056 16 12.9922 16.1173 13.3211 16.3371C13.65 16.5568 13.9064 16.8692 14.0578 17.2346C14.2091 17.6001 14.2487 18.0022 14.1716 18.3902C14.0944 18.7781 13.9039 19.1345 13.6242 19.4142C13.3445 19.6939 12.9881 19.8844 12.6002 19.9616C12.2122 20.0387 11.8101 19.9991 11.4446 19.8478C11.0792 19.6964 10.7668 19.44 10.5471 19.1111C10.3273 18.7822 10.21 18.3956 10.21 18C10.21 17.4696 10.4207 16.9609 10.7958 16.5858C11.1709 16.2107 11.6796 16 12.21 16Z"/><path d="M23.79 23C24.7789 23 25.7456 22.7068 26.5679 22.1573C27.3901 21.6079 28.031 20.827 28.4094 19.9134C28.7878 18.9998 28.8869 17.9945 28.6939 17.0245C28.501 16.0546 28.0248 15.1637 27.3255 14.4645C26.6263 13.7652 25.7354 13.289 24.7655 13.0961C23.7955 12.9031 22.7902 13.0022 21.8766 13.3806C20.963 13.759 20.1821 14.3999 19.6327 15.2221C19.0832 16.0444 18.79 17.0111 18.79 18C18.79 18.6566 18.9193 19.3068 19.1706 19.9134C19.4219 20.52 19.7902 21.0712 20.2545 21.5355C21.1921 22.4732 22.4639 23 23.79 23ZM23.79 16C24.1856 16 24.5722 16.1173 24.9011 16.3371C25.23 16.5568 25.4864 16.8692 25.6378 17.2346C25.7891 17.6001 25.8287 18.0022 25.7516 18.3902C25.6744 18.7781 25.4839 19.1345 25.2042 19.4142C24.9245 19.6939 24.5681 19.8844 24.1802 19.9616C23.7922 20.0387 23.3901 19.9991 23.0246 19.8478C22.6592 19.6964 22.3468 19.44 22.1271 19.1111C21.9073 18.7822 21.79 18.3956 21.79 18C21.79 17.4696 22.0007 16.9609 22.3758 16.5858C22.7509 16.2107 23.2596 16 23.79 16Z"/>',

  solidAlerted:
    '<path d="M26.9039 1.64597L21.2222 11.1156C20.9526 11.4981 20.9281 11.9946 21.1588 12.4002C21.3896 12.8058 21.8363 13.0517 22.3148 13.0364H33.6881C34.1666 13.0517 34.6134 12.8058 34.8441 12.4002C35.0748 11.9946 35.0503 11.4981 34.7808 11.1156L29.0991 1.64597C28.8711 1.26889 28.4532 1.03711 28.0015 1.03711C27.5497 1.03711 27.1319 1.26889 26.9039 1.64597Z"/><path d="M21.9592 6H4C3.46957 6 2.96086 6.21071 2.58579 6.58579C2.21071 6.96086 2 7.46957 2 8V28C2 28.5304 2.21071 29.0391 2.58579 29.4142C2.96086 29.7893 3.46957 30 4 30H32C32.5304 30 33.0391 29.7893 33.4142 29.4142C33.7893 29.0391 34 28.5304 34 28V15.0261C33.8886 15.0352 33.7763 15.0387 33.6637 15.0364H30V24H6V12H19.0073C18.9663 11.3176 19.1449 10.6282 19.5362 10.0385L21.9592 6Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M20.3207 14.3995C20.0638 14.647 19.8329 14.9225 19.6327 15.2221C19.0832 16.0444 18.79 17.0111 18.79 18C18.79 18.6566 18.9193 19.3068 19.1706 19.9134C19.4219 20.52 19.7902 21.0712 20.2545 21.5355C21.1921 22.4732 22.4639 23 23.79 23C24.7789 23 25.7456 22.7068 26.5679 22.1573C27.3901 21.6079 28.031 20.827 28.4094 19.9134C28.7878 18.9998 28.8869 17.9945 28.6939 17.0245C28.5503 16.3026 28.2498 15.6244 27.8171 15.0364H22.3395C21.6107 15.051 20.8999 14.8241 20.3207 14.3995ZM24.9011 16.3371C24.5722 16.1173 24.1856 16 23.79 16C23.2596 16 22.7509 16.2107 22.3758 16.5858C22.0007 16.9609 21.79 17.4696 21.79 18C21.79 18.3956 21.9073 18.7822 22.1271 19.1111C22.3468 19.44 22.6592 19.6964 23.0246 19.8478C23.3901 19.9991 23.7922 20.0387 24.1802 19.9616C24.5681 19.8844 24.9245 19.6939 25.2042 19.4142C25.4839 19.1345 25.6744 18.7781 25.7516 18.3902C25.8287 18.0022 25.7891 17.6001 25.6378 17.2346C25.4864 16.8692 25.23 16.5568 24.9011 16.3371Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M12.21 23C13.1989 23 14.1656 22.7068 14.9879 22.1573C15.8101 21.6079 16.451 20.827 16.8294 19.9134C17.2078 18.9998 17.3069 17.9945 17.1139 17.0245C16.921 16.0546 16.4448 15.1637 15.7455 14.4645C15.0463 13.7652 14.1554 13.289 13.1855 13.0961C12.2155 12.9031 11.2102 13.0022 10.2966 13.3806C9.38295 13.759 8.60206 14.3999 8.05265 15.2221C7.50325 16.0444 7.21 17.0111 7.21 18C7.21 18.6566 7.33933 19.3068 7.5906 19.9134C7.84188 20.52 8.21017 21.0712 8.67447 21.5355C9.61215 22.4732 10.8839 23 12.21 23ZM12.21 16C12.6056 16 12.9922 16.1173 13.3211 16.3371C13.65 16.5568 13.9064 16.8692 14.0578 17.2346C14.2091 17.6001 14.2487 18.0022 14.1716 18.3902C14.0944 18.7781 13.9039 19.1345 13.6242 19.4142C13.3445 19.6939 12.9881 19.8844 12.6002 19.9616C12.2122 20.0387 11.8101 19.9991 11.4446 19.8478C11.0792 19.6964 10.7668 19.44 10.5471 19.1111C10.3273 18.7822 10.21 18.3956 10.21 18C10.21 17.4696 10.4207 16.9609 10.7958 16.5858C11.1709 16.2107 11.6796 16 12.21 16Z"/>',

  solidBadged:
    '<path d="M12.21 23C13.1989 23 14.1656 22.7068 14.9879 22.1573C15.8101 21.6079 16.451 20.827 16.8294 19.9134C17.2078 18.9998 17.3069 17.9945 17.1139 17.0245C16.921 16.0546 16.4448 15.1637 15.7455 14.4645C15.0463 13.7652 14.1554 13.289 13.1855 13.0961C12.2155 12.9031 11.2102 13.0022 10.2966 13.3806C9.38295 13.759 8.60206 14.3999 8.05265 15.2221C7.50325 16.0444 7.21 17.0111 7.21 18C7.21 18.6566 7.33933 19.3068 7.5906 19.9134C7.84188 20.52 8.21017 21.0712 8.67447 21.5355C9.61215 22.4732 10.8839 23 12.21 23ZM12.21 16C12.6056 16 12.9922 16.1173 13.3211 16.3371C13.65 16.5568 13.9064 16.8692 14.0578 17.2346C14.2091 17.6001 14.2487 18.0022 14.1716 18.3902C14.0944 18.7781 13.9039 19.1345 13.6242 19.4142C13.3445 19.6939 12.9881 19.8844 12.6002 19.9616C12.2122 20.0387 11.8101 19.9991 11.4446 19.8478C11.0792 19.6964 10.7668 19.44 10.5471 19.1111C10.3273 18.7822 10.21 18.3956 10.21 18C10.21 17.4696 10.4207 16.9609 10.7958 16.5858C11.1709 16.2107 11.6796 16 12.21 16Z"/><path d="M23.79 23C24.7789 23 25.7456 22.7068 26.5679 22.1573C27.3901 21.6079 28.031 20.827 28.4094 19.9134C28.7878 18.9998 28.8869 17.9945 28.6939 17.0245C28.501 16.0546 28.0248 15.1637 27.3255 14.4645C26.6263 13.7652 25.7354 13.289 24.7655 13.0961C23.7955 12.9031 22.7902 13.0022 21.8766 13.3806C20.963 13.759 20.1821 14.3999 19.6327 15.2221C19.0832 16.0444 18.79 17.0111 18.79 18C18.79 18.6566 18.9193 19.3068 19.1706 19.9134C19.4219 20.52 19.7902 21.0712 20.2545 21.5355C21.1921 22.4732 22.4639 23 23.79 23ZM23.79 16C24.1856 16 24.5722 16.1173 24.9011 16.3371C25.23 16.5568 25.4864 16.8692 25.6378 17.2346C25.7891 17.6001 25.8287 18.0022 25.7516 18.3902C25.6744 18.7781 25.4839 19.1345 25.2042 19.4142C24.9245 19.6939 24.5681 19.8844 24.1802 19.9616C23.7922 20.0387 23.3901 19.9991 23.0246 19.8478C22.6592 19.6964 22.3468 19.44 22.1271 19.1111C21.9073 18.7822 21.79 18.3956 21.79 18C21.79 17.4696 22.0007 16.9609 22.3758 16.5858C22.7509 16.2107 23.2596 16 23.79 16Z"/><path d="M30 13.5V24H6V12H25.51C24.578 11.3019 23.8215 10.3962 23.3007 9.35463C22.78 8.31309 22.5092 7.16448 22.51 6H4C3.46957 6 2.96086 6.21071 2.58579 6.58579C2.21071 6.96086 2 7.46957 2 8V28C2 28.5304 2.21071 29.0391 2.58579 29.4142C2.96086 29.7893 3.46957 30 4 30H32C32.5304 30 33.0391 29.7893 33.4142 29.4142C33.7893 29.0391 34 28.5304 34 28V12.34C32.8031 13.097 31.4162 13.4993 30 13.5Z"/><path d="M30 11C32.7614 11 35 8.76142 35 6C35 3.23858 32.7614 1 30 1C27.2386 1 25 3.23858 25 6C25 8.76142 27.2386 11 30 11Z"/>',
};

export const tapeDriveIconName = 'tape-drive';
export const tapeDriveIcon: IconShapeTuple = [tapeDriveIconName, renderIcon(icon)];
