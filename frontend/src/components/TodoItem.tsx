import React, { useState } from "react";
import { TableRow, TableCell } from "./ui/table";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { GripVertical } from "lucide-react";

interface TodoItemProps {
  id: number;
  name: string;
  status: "NOT_DONE" | "DONE" | "IN_PROGRESS";
  priority: "LOW" | "MEDIUM" | "HIGH";
  description: string;
  isEditing: boolean;
  editedName: string;
  onStatusToggle: () => void;
  onDelete: () => void;
  onPriorityChange: (priority: "LOW" | "MEDIUM" | "HIGH") => void;
  onNameEdit: () => void;
  onNameChange: (name: string) => void;
  onNameSubmit: () => void;
  onKeyPress: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  propertyValues: TodoItemSpecificPropertyValues[];
  properties: Property[];
  onPropertyValueSubmit: (todoId: number, propertyId: number, value: string) => void;
  onPropertyKeyPress: (e: React.KeyboardEvent<HTMLInputElement>, todoId: number, propertyId: number) => void;
  onRowClick: () => void; // Add this line
}

interface TodoItemSpecificPropertyValues {
  id: number;
  name: string;
  type: string;
  values: PropertyValue[];
}

interface PropertyValue {
  id: number;
  value: string;
  propertyId: number;
}

interface Property {
  id: number;
  name: string;
}

const TodoItem: React.FC<TodoItemProps> = ({
  id,
  name,
  status,
  priority,
  isEditing,
  editedName,
  onStatusToggle,
  onDelete,
  onPriorityChange,
  onNameEdit,
  onNameChange,
  onNameSubmit,
  onKeyPress,
  propertyValues,
  properties,
  onPropertyValueSubmit,
  onPropertyKeyPress,
  onRowClick, // Add this line
}) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  };

  const [editingProperty, setEditingProperty] = useState<{ propertyId: number, value: string } | null>(null);
  const [editedPropertyValue, setEditedPropertyValue] = useState("");

  return (
    <TableRow ref={setNodeRef} style={style} onClick={onRowClick}>
      <TableCell className="w-[50px]">
        <button
          className="cursor-grab hover:bg-gray-100 p-1 rounded"
          {...attributes}
          {...listeners}
        >
          <GripVertical className="h-4 w-4 text-gray-400" />
        </button>
      </TableCell>
      <TableCell className="text-center">{id}</TableCell>
      <TableCell
        className="text-center cursor-pointer hover:bg-gray-50"
        onClick={onNameEdit}
      >
        {isEditing ? (
          <input
            type="text"
            value={editedName}
            onChange={(e) => onNameChange(e.target.value)}
            onKeyDown={onKeyPress}
            onBlur={onNameSubmit}
            className="w-full px-2 py-1 text-center border rounded"
            autoFocus
          />
        ) : (
          <span className="hover:text-blue-600">{name}</span>
        )}
      </TableCell>
      <TableCell className="text-center">
        <span
          className={`px-3 py-1 rounded-full text-sm ${status === "DONE"
            ? "bg-green-100 text-green-800"
            : status === "IN_PROGRESS"
              ? "bg-yellow-100 text-yellow-800"
              : "bg-gray-100 text-gray-800"
            }`}
        >
          {status}
        </span>
      </TableCell>
      <TableCell className="text-center">
        <select
          value={priority}
          onChange={(e) =>
            onPriorityChange(e.target.value as "LOW" | "MEDIUM" | "HIGH")
          }
          className={`px-3 py-1 rounded-full text-sm ${priority === "HIGH"
            ? "bg-red-100 text-red-800"
            : priority === "MEDIUM"
              ? "bg-yellow-100 text-yellow-800"
              : "bg-blue-100 text-blue-800"
            }`}
        >
          <option value="LOW">LOW</option>
          <option value="MEDIUM">MEDIUM</option>
          <option value="HIGH">HIGH</option>
        </select>
      </TableCell>
      {properties.map((property) => {
        const propertyValue = propertyValues.find(pv => pv.id === property.id)?.values[0]?.value || "";
        return (
          <TableCell
            key={property.id}
            className="text-center cursor-pointer hover:bg-gray-50"
            onClick={(e) => {
              e.stopPropagation(); // Prevent row click from opening detail view
              setEditingProperty({ propertyId: property.id, value: propertyValue });
              setEditedPropertyValue(propertyValue);
            }}
          >
            {editingProperty?.propertyId === property.id ? (
              <input
                type="text"
                value={editedPropertyValue}
                onChange={(e) => setEditedPropertyValue(e.target.value)}
                onKeyDown={(e) => onPropertyKeyPress(e, id, property.id)}
                onBlur={() => onPropertyValueSubmit(id, property.id, editedPropertyValue)}
                className="w-full px-2 py-1 text-center border rounded"
                autoFocus
              />
            ) : (
              propertyValue
            )}
          </TableCell>
        );
      })}
      <TableCell className="text-center">
        <button
          onClick={onStatusToggle}
          className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors"
        >
          Toggle Status
        </button>
      </TableCell>
      <TableCell className="text-center">
        <button
          onClick={onDelete}
          className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors"
        >
          Delete
        </button>
      </TableCell>
    </TableRow>
  );
};

export default TodoItem;
