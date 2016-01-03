// https://github.com/CTurt/PS4-Loader
// https://github.com/CTurt/bin2u32

function writeLoader(write) {
	setBase(write);
	u32[0] = 0x53555441;
	u32[1] = 0x6373b848;
	u32[2] = 0x74654e65;
	u32[3] = 0x83486f53;
	u32[4] = 0x0ebe60ec;
	u32[5] = 0x48000000;
	u32[6] = 0x40245c8d;
	u32[7] = 0x24448948;
	u32[8] = 0xda894840;
	u32[9] = 0x244c8d48;
	u32[10] = 0x024fbf10;
	u32[11] = 0xc0310000;
	u32[12] = 0x482444c7;
	u32[13] = 0x74656b63;
	u32[14] = 0x4c2444c6;
	u32[15] = 0x01dee800;
	u32[16] = 0xb8480000;
	u32[17] = 0x4e656373;
	u32[18] = 0x6f537465;
	u32[19] = 0x48da8948;
	u32[20] = 0x40244489;
	u32[21] = 0x6b63b848;
	u32[22] = 0x6c437465;
	u32[23] = 0x8948736f;
	u32[24] = 0x48482444;
	u32[25] = 0x18244c8d;
	u32[26] = 0x00000ebe;
	u32[27] = 0x024fbf00;
	u32[28] = 0xc0310000;
	u32[29] = 0x2444c766;
	u32[30] = 0xe8006550;
	u32[31] = 0x000001a0;
	u32[32] = 0x6373b848;
	u32[33] = 0x74654e65;
	u32[34] = 0x89486942;
	u32[35] = 0x448948da;
	u32[36] = 0x8d484024;
	u32[37] = 0xbe20244c;
	u32[38] = 0x0000000e;
	u32[39] = 0x00024fbf;
	u32[40] = 0x66c03100;
	u32[41] = 0x482444c7;
	u32[42] = 0x44c6646e;
	u32[43] = 0xe8004a24;
	u32[44] = 0x0000016c;
	u32[45] = 0x6373b848;
	u32[46] = 0x74654e65;
	u32[47] = 0x8948694c;
	u32[48] = 0x448948da;
	u32[49] = 0x8d484024;
	u32[50] = 0xbe28244c;
	u32[51] = 0x0000000e;
	u32[52] = 0x00024fbf;
	u32[53] = 0xc7c03100;
	u32[54] = 0x73482444;
	u32[55] = 0xc66e6574;
	u32[56] = 0x004c2444;
	u32[57] = 0x000137e8;
	u32[58] = 0x73b84800;
	u32[59] = 0x654e6563;
	u32[60] = 0x48634174;
	u32[61] = 0x8948da89;
	u32[62] = 0x48402444;
	u32[63] = 0x30244c8d;
	u32[64] = 0x00000ebe;
	u32[65] = 0x024fbf00;
	u32[66] = 0xc0310000;
	u32[67] = 0x482444c7;
	u32[68] = 0x74706563;
	u32[69] = 0x4c2444c6;
	u32[70] = 0x0102e800;
	u32[71] = 0xb8480000;
	u32[72] = 0x4e656373;
	u32[73] = 0x65527465;
	u32[74] = 0x48da8948;
	u32[75] = 0x40244489;
	u32[76] = 0x244c8d48;
	u32[77] = 0x000ebe38;
	u32[78] = 0x4fbf0000;
	u32[79] = 0x31000002;
	u32[80] = 0x44c766c0;
	u32[81] = 0x76634824;
	u32[82] = 0x4a2444c6;
	u32[83] = 0x00cee800;
	u32[84] = 0x04c70000;
	u32[85] = 0x616f6c24;
	u32[86] = 0x66c93164;
	u32[87] = 0x042444c7;
	u32[88] = 0x89487265;
	u32[89] = 0x2444c6e7;
	u32[90] = 0x01ba0006;
	u32[91] = 0xc6000000;
	u32[92] = 0x10402444;
	u32[93] = 0x000002be;
	u32[94] = 0x2444c600;
	u32[95] = 0x44c70241;
	u32[96] = 0x00004424;
	u32[97] = 0xc7660000;
	u32[98] = 0x23422444;
	u32[99] = 0x2444c63f;
	u32[100] = 0x44c6004a;
	u32[101] = 0xc6004b24;
	u32[102] = 0x004c2444;
	u32[103] = 0x4d2444c6;
	u32[104] = 0x2444c600;
	u32[105] = 0x44c6004e;
	u32[106] = 0xff004f24;
	u32[107] = 0xba102454;
	u32[108] = 0x00000010;
	u32[109] = 0x41de8948;
	u32[110] = 0xc789c489;
	u32[111] = 0x202454ff;
	u32[112] = 0x00000abe;
	u32[113] = 0xe7894400;
	u32[114] = 0x282454ff;
	u32[115] = 0xf631d231;
	u32[116] = 0x48e78944;
	u32[117] = 0x300000bb;
	u32[118] = 0x00000926;
	u32[119] = 0x2454ff00;
	u32[120] = 0xebc58930;
	u32[121] = 0x48984805;
	u32[122] = 0xc931c301;
	u32[123] = 0x001000ba;
	u32[124] = 0xde894800;
	u32[125] = 0x54ffef89;
	u32[126] = 0xc0853824;
	u32[127] = 0x8944e77f;
	u32[128] = 0x2454ffe7;
	u32[129] = 0xffef8918;
	u32[130] = 0x48182454;
	u32[131] = 0x5b60c483;
	u32[132] = 0xc35c415d;
	u32[133] = 0x90909090;
	u32[134] = 0x90909090;
	u32[135] = 0x90909090;
	u32[136] = 0xbf495741;
	u32[137] = 0x263ffff8;
	u32[138] = 0x00000009;
	u32[139] = 0x483f8b4d;
	u32[140] = 0xff41c031;
	u32[141] = 0xc35f41d7;
	u32[142] = 0x90909090;
	u32[143] = 0x90909090;
	u32[144] = 0xffffffff;
	u32[145] = 0xffffffff;
	u32[146] = 0x00000000;
	u32[147] = 0x00000000;
	u32[148] = 0xffffffff;
	u32[149] = 0xffffffff;
	u32[150] = 0x00000000;
	/*u32[0] = 0x89485441;
	u32[1] = 0x485355c8;
	u32[2] = 0x4860ec83;
	u32[3] = 0x3ffff8a3;
	u32[4] = 0x00000926;
	u32[5] = 0x5c8d4800;
	u32[6] = 0xb8484024;
	u32[7] = 0x4e656373;
	u32[8] = 0x6f537465;
	u32[9] = 0x48da8948;
	u32[10] = 0x40244489;
	u32[11] = 0x244c8d48;
	u32[12] = 0x000ebe10;
	u32[13] = 0x4fbf0000;
	u32[14] = 0x31000002;
	u32[15] = 0x2444c7c0;
	u32[16] = 0x656b6348;
	u32[17] = 0x2444c674;
	u32[18] = 0xe1e8004c;
	u32[19] = 0x48000001;
	u32[20] = 0x656373b8;
	u32[21] = 0x5374654e;
	u32[22] = 0xda89486f;
	u32[23] = 0x24448948;
	u32[24] = 0x63b84840;
	u32[25] = 0x4374656b;
	u32[26] = 0x48736f6c;
	u32[27] = 0x48244489;
	u32[28] = 0x244c8d48;
	u32[29] = 0x000ebe18;
	u32[30] = 0x4fbf0000;
	u32[31] = 0x31000002;
	u32[32] = 0x44c766c0;
	u32[33] = 0x00655024;
	u32[34] = 0x0001a3e8;
	u32[35] = 0x73b84800;
	u32[36] = 0x654e6563;
	u32[37] = 0x48694274;
	u32[38] = 0x8948da89;
	u32[39] = 0x48402444;
	u32[40] = 0x20244c8d;
	u32[41] = 0x00000ebe;
	u32[42] = 0x024fbf00;
	u32[43] = 0xc0310000;
	u32[44] = 0x2444c766;
	u32[45] = 0xc6646e48;
	u32[46] = 0x004a2444;
	u32[47] = 0x00016fe8;
	u32[48] = 0x73b84800;
	u32[49] = 0x654e6563;
	u32[50] = 0x48694c74;
	u32[51] = 0x8948da89;
	u32[52] = 0x48402444;
	u32[53] = 0x28244c8d;
	u32[54] = 0x00000ebe;
	u32[55] = 0x024fbf00;
	u32[56] = 0xc0310000;
	u32[57] = 0x482444c7;
	u32[58] = 0x6e657473;
	u32[59] = 0x4c2444c6;
	u32[60] = 0x013ae800;
	u32[61] = 0xb8480000;
	u32[62] = 0x4e656373;
	u32[63] = 0x63417465;
	u32[64] = 0x48da8948;
	u32[65] = 0x40244489;
	u32[66] = 0x244c8d48;
	u32[67] = 0x000ebe30;
	u32[68] = 0x4fbf0000;
	u32[69] = 0x31000002;
	u32[70] = 0x2444c7c0;
	u32[71] = 0x70656348;
	u32[72] = 0x2444c674;
	u32[73] = 0x05e8004c;
	u32[74] = 0x48000001;
	u32[75] = 0x656373b8;
	u32[76] = 0x5274654e;
	u32[77] = 0xda894865;
	u32[78] = 0x24448948;
	u32[79] = 0x4c8d4840;
	u32[80] = 0x0ebe3824;
	u32[81] = 0xbf000000;
	u32[82] = 0x0000024f;
	u32[83] = 0xc766c031;
	u32[84] = 0x63482444;
	u32[85] = 0x2444c676;
	u32[86] = 0xd1e8004a;
	u32[87] = 0xc7000000;
	u32[88] = 0x6f6c2404;
	u32[89] = 0xc9316461;
	u32[90] = 0x2444c766;
	u32[91] = 0x48726504;
	u32[92] = 0x44c6e789;
	u32[93] = 0xba000624;
	u32[94] = 0x00000001;
	u32[95] = 0x402444c6;
	u32[96] = 0x0002be10;
	u32[97] = 0x44c60000;
	u32[98] = 0xc7024124;
	u32[99] = 0x00442444;
	u32[100] = 0x66000000;
	u32[101] = 0x422444c7;
	u32[102] = 0x44c63f23;
	u32[103] = 0xc6004a24;
	u32[104] = 0x004b2444;
	u32[105] = 0x4c2444c6;
	u32[106] = 0x2444c600;
	u32[107] = 0x44c6004d;
	u32[108] = 0xc6004e24;
	u32[109] = 0x004f2444;
	u32[110] = 0x102454ff;
	u32[111] = 0x000010ba;
	u32[112] = 0xde894800;
	u32[113] = 0x89c48941;
	u32[114] = 0x2454ffc7;
	u32[115] = 0x000abe20;
	u32[116] = 0x89440000;
	u32[117] = 0x2454ffe7;
	u32[118] = 0x31d23128;
	u32[119] = 0xe78944f6;
	u32[120] = 0x0000bb48;
	u32[121] = 0x00092630;
	u32[122] = 0x54ff0000;
	u32[123] = 0xc5893024;
	u32[124] = 0x984805eb;
	u32[125] = 0x31c30148;
	u32[126] = 0x1000bac9;
	u32[127] = 0x89480000;
	u32[128] = 0xffef89de;
	u32[129] = 0x85382454;
	u32[130] = 0x44e77fc0;
	u32[131] = 0x54ffe789;
	u32[132] = 0xef891824;
	u32[133] = 0x182454ff;
	u32[134] = 0x60c48348;
	u32[135] = 0x5c415d5b;
	u32[136] = 0x909090c3;
	u32[137] = 0x90909090;
	u32[138] = 0x90909090;
	u32[139] = 0x90909090;
	u32[140] = 0xbf495741;
	u32[141] = 0x263ffff8;
	u32[142] = 0x00000009;
	u32[143] = 0x483f8b4d;
	u32[144] = 0xff41c031;
	u32[145] = 0xc35f41d7;
	u32[146] = 0x90909090;
	u32[147] = 0x90909090;
	u32[148] = 0xffffffff;
	u32[149] = 0xffffffff;
	u32[150] = 0x00000000;
	u32[151] = 0x00000000;
	u32[152] = 0xffffffff;
	u32[153] = 0xffffffff;*/
}
