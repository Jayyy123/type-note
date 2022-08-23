import { Column, DataType, Model, Table } from "sequelize-typescript";


@Table({
    tableName: "note",
    timestamps: false
})
export class Notes extends Model {

    @Column({
        type: DataType.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    })
    id!: Number;
    
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    note_id!: Number;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    title!: String;

    @Column({
        type: DataType.STRING,
    })
    description!: String;
    
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    completed!: String;
    
}



// export const noteHandler = {
//     create: (note: {}) => {

//     }
// }