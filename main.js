console.log('Hello World');
process.stdout.write('Hello WOrld');

function write (text){
    process.stdout.write(text);
}
write('Hello world');
write('Hello world');
write('Hello/tWorld\n');
write('\x1B[0;39');
write('Hello world');
write('\x1B[0;0');
write('\x1B[0;31m');
write('\x1B[0;31m'); write('Hello world');write('\x1B[0;0');write('\n');
write('\x1B[0;32m'); write('Hello world');write('\x1B[0;0');write('\n');
write('\x1B[0;33m'); write('Hello world');write('\x1B[0;0');write('\n');
write('\x1B[0;34m'); write('Hello world');write('\x1B[0;0');write('\n');
write('\x1B[0;35m'); write('Hello world');write('\x1B[0;0');write('\n');
write('\x1B[0;36m'); write('Hello world');write('\x1B[0;0');write('\n');
write('\x1B[0;37m'); write('Hello world');write('\x1B[0;0');write('\n');
write('\x1B[0;38m'); write('Hello world');write('\x1B[0;0');write('\n');

write('\x1B[0;40m'); write('Hello world');write('\x1B[0;0');write('\n');
write('\x1B[0;41m'); write('Hello world');write('\x1B[0;0');write('\n');
write('\x1B[0;42m'); write('Hello world');write('\x1B[0;0');write('\n');
write('\x1B[0;43m'); write('Hello world');write('\x1B[0;0');write('\n');
write('\x1B[0;44m'); write('Hello world');write('\x1B[0;0');write('\n');
write('\x1B[0;45m'); write('Hello world');write('\x1B[0;0');write('\n');
write('\x1B[0;46m'); write('Hello world');write('\x1B[0;0');write('\n');
write('\x1B[0;47m'); write('Hello world');write('\x1B[0;0');write('\n');
write('\x1B[0;48m'); write('Hello world');write('\x1B[0;0');write('\n');
write('\x1B[0;49m'); write('Hello world');write('\x1B[0;0');write('\n');

write('\x1B[2;30m\x1B[2;41m'); write('Hello world2');write('\x1B[0;0');write('\n');

write('\x1B[0;100m'); write('Hello world');write('\x1B[0;0');write('\n');
write('\x1B[0;101m'); write('Hello world');write('\x1B[0;0');write('\n');
write('\x1B[0;102m'); write('Hello world');write('\x1B[0;0');write('\n');
write('\x1B[0;103m'); write('Hello world');write('\x1B[0;0');write('\n');
write('\x1B[0;104m'); write('Hello world');write('\x1B[0;0');write('\n');
write('\x1B[0;105m'); write('Hello world');write('\x1B[0;0');write('\n');
write('\x1B[0;106m'); write('Hello world');write('\x1B[0;0');write('\n');
write('\x1B[0;107m'); write('Hello world');write('\x1B[0;0');write('\n');

for(let i=o; i<256; i++){
    write(`\x1B[31;5;${}`)
}


