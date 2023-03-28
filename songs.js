function songs(arr){

    let song = [];
    class Song{
        constructor(typeList, name, time){
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }
    };

let number = arr[0];
let type_List = arr[arr.length - 1];
let songs = arr.slice(1, arr.length-1);

for (let i = 0; i< number; i++){
    let current = songs[i].split('_');
    let [typeList, name, time] = current;
    song.push(new Song(typeList, name, time));

}
console.log(song);
debugger
for(let i =0;i<song.length;i++){
if(type_List === song[i].typeList){
    console.log(song[i].name);
}
}

};
songs([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite'])
    