import Button from "./components/ui/button";
import DatePicker from "./components/ui/date-picker";
import Radio from "./components/ui/radiobutton";
import Checkbox from "./components/ui/checkbox";
import Dropdown from "./components/ui/dropdown";
import Switch from "./components/ui/switch";
import FileUploader from "./components/ui/ImageUpload";
import { useState } from "react";
import { InputField } from "./components/ui/input";
import ImageUploader from "./components/ui/ImageUpload";
import MultipleImageUploader from "./components/ui/MultipleImageUploader";
import NumberInput from "./components/ui/number-input";

export interface Field {
  image: File | null;
  file: File | null;
  name: string;
  phone: string;
  aadhar: string;
  notes: string;
  email: string;
  password: string;
  age: string;
  quantity: string;
  priority: string;
  accept: string[];
  images: File[] | string[];
  notifications: boolean;
  select: boolean;
  radioSelect: string;
  dateSelect: string;
  timeSelect: string;
  dateField: string;
  timeField: string;
  datetime: string;
  count: number;
}
const initialFormData: Field = {
  name: "",
  file: null,
  image: null,
  phone: "",
  aadhar: "",
  notes: "",
  email: "",
  password: "",
  age: "",
  quantity: "",
  priority: "",
  accept: [],
  images: [],
  notifications: false,
  select: false,
  radioSelect: "",
  dateSelect: "",
  timeSelect: "",
  dateField: "",
  timeField: "",
  datetime: "",
  count: 0,
};
function App() {
  const [formData, setFormData] = useState<Field>({
    ...initialFormData,
  });

  const [selected, setSelected] = useState<string>("option1");
  const [attemptedSubmit, setAttemptedSubmit] = useState(false);
  const checkboxOptions = ["option1", "option2", "option3", "yes"];
  const [dateSelect, setDateSelect] = useState("");
  const [timeSelect, setTimeSelect] = useState("");
  const [dateField, setDateField] = useState("");
  const [timeField, setTimeField] = useState("");
  const [datetime, setDatetime] = useState("");
  const [count, setCount] = useState(1);

  const handleFilesChange = (file: File | null, field: keyof Field) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: file,
    }));
    console.log(formData);
  };

  const handleSubmit = () => {
    setAttemptedSubmit(true);
    console.log("Submitted Form Data:", formData);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-action-base-white">
      <div className="border border-action-border-neutral-light_normal p-8 rounded-lg shadow-lg bg-action-base-white">
        <div className={`${formData.image ? "w-1/5" : "w-2/5 "}`}>
          <ImageUploader<Field>
            label="select"
            field="image"
            onFilesChange={handleFilesChange}
            file={formData.image}
            required={true}
          />
        </div>

        <div className={`${formData.file ? "w-2/5" : "w-2/5"}`}>
          <FileUploader<Field>
            label="Select file"
            field="file"
            onFilesChange={handleFilesChange}
            file={formData.file}
            required
          />
        </div>
        <div className="w-2/5">
          <MultipleImageUploader
            imageName="images"
            label="Multiple Image"
            formData={formData}
            setFormData={setFormData}
            disabled={false}
            required={true}
          />
        </div>

        <div className="flex flex-col  w-2/5  gap-5 mb-8 mt-4">
          <InputField
            type="text"
            label={"Name"}
            value={formData.name ?? ""}
            onChange={(value: string) => {
              setFormData((prevData) => ({
                ...prevData,
                name: value,
              }));
            }}
            required={true}
            disabled={false}
          />

          <InputField
            type="textarea"
            label="description"
            value={formData.notes ?? ""}
            onChange={(value: string) => {
              setFormData((prevData) => ({
                ...prevData,
                notes: value,
              }));
            }}
            required={true}
            maxChar={10}
          />
          <InputField
            type="password"
            label="password"
            value={formData.password ?? ""}
            onChange={(value: string) => {
              setFormData((prevData) => ({
                ...prevData,
                password: value,
              }));
            }}
            required={true}
          />
          <div className="flex gap-3 ">
            {checkboxOptions.map((option) => (
              <Checkbox
                key={option}
                id={`checkbox-${option}`}
                value={option}
                checked={formData.accept.includes(option)}
                onChange={(e) => {
                  const checked = e.target.checked;
                  setFormData((prev) => ({
                    ...prev,
                    accept: checked
                      ? [...prev.accept, option]
                      : prev.accept.filter((val) => val !== option),
                  }));
                }}
              />
            ))}
          </div>

          <Dropdown
            label="Options"
            values={["Option1", "Option2", "Option3"]}
            value={formData.priority}
            onChange={(
              e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
            ) => {
              setFormData((prevData) => ({
                ...prevData,
                priority: e.target.value,
              }));
            }}
            searchable={true}
            required={true}
            className="z-[30]"
            disabled={false}
          />

          <div>
            <Switch
              label="Enable Notifications"
              value="Option1"
              checked={formData.notifications}
              onChange={(val) => {
                setFormData((prevData) => ({
                  ...prevData,
                  notifications: val,
                }));
                console.log("Notifications toggled:", val);
              }}
              description="Receive email and app notifications"
            />
            <Switch
              value="Option1"
              checked={formData.select}
              onChange={(val) => {
                setFormData((prev) => ({ ...prev, select: val }));
                console.log("select toggled:", val);
              }}
              description="Receive updates"
              applyBorder={true}
            />
          </div>
          <NumberInput
            value={formData.count}
            onChange={(val) =>
              setFormData((prevData) => ({ ...prevData, count: val }))
            }
            min={0}
            max={10}
          />

          <DatePicker
            type="datetime-picker"
            label="Select Date"
            value={formData.datetime}
            onChange={(val) =>
              setFormData((prev) => ({ ...prev, datetime: val }))
            }
          />

          <DatePicker
            type="date-select"
            label="Select Date"
            value={formData.dateSelect}
            onChange={(val) =>
              setFormData((prev) => ({ ...prev, dateSelect: val }))
            }
          />

          <DatePicker
            type="time-select"
            label="Select Time"
            value={formData.timeSelect}
            onChange={(val) =>
              setFormData((prev) => ({ ...prev, timeSelect: val }))
            }
          />
          <DatePicker
            type="date-field"
            label="Select Date"
            value={formData.dateField}
            onChange={(val) =>
              setFormData((prev) => ({ ...prev, dateField: val }))
            }
          />

          <DatePicker
            type="time-field"
            label="Select Time"
            value={formData.timeField}
            onChange={(val) =>
              setFormData((prev) => ({ ...prev, timeField: val }))
            }
          />

          <div>
            <Radio
              id="option1"
              name="radioGroup"
              value="option1"
              checked={formData.radioSelect === "option1"}
              onChange={() =>
                setFormData((prev) => ({ ...prev, radioSelect: "option1" }))
              }
              description="This is option 1"
            />

            <Radio
              id="option2"
              name="radioGroup"
              value="option2"
              checked={formData.radioSelect === "option2"}
              onChange={() =>
                setFormData((prev) => ({ ...prev, radioSelect: "option2" }))
              }
              description="This is option 2"
            />
          </div>

          <Button category="primary" size="md" onClick={handleSubmit}>
            Button
          </Button>
          <div></div>
        </div>

        <div className=" grid grid-cols-4 gap-5">
          <Button category="primary" size="lg" onClick={handleSubmit}>
            Button
          </Button>
          <Button category="primary-soft" size="lg" onClick={handleSubmit}>
            Button
          </Button>
          <Button category="secondary" size="lg" onClick={handleSubmit}>
            Button
          </Button>
          <Button category="neutral" size="lg" onClick={handleSubmit}>
            Button
          </Button>
          <Button category="tertiary" size="lg" onClick={handleSubmit}>
            Button
          </Button>
          <Button category="danger" size="lg" onClick={handleSubmit}>
            Button
          </Button>
          <Button category="danger-soft" size="lg" onClick={handleSubmit}>
            Button
          </Button>
          <Button category="primary" size="lg" disabled onClick={handleSubmit}>
            Button
          </Button>
        </div>

        {/* <Button
            iconLeft={<Rocket size={20} />}
            variant="primary"
            size="large"
          >
            Button
          </Button>
          <Button
            iconRight={<Rocket size={20} />}
            variant="primary"
            size="large"
          >
            Button
          </Button>
          <Button
            iconLeft={<Rocket size={20} />}
            iconRight={<Rocket size={20} />}
            variant="primary"
            size="large"
          >
            Button
          </Button>
          <Button
            iconOnly={<Rocket size={20} />}
            variant="primary"
            size="large"
          >
            Button
          </Button>
        </div>
        <div className="flex gap-5 mb-8">
          <Button variant="primary_soft" size="small">
            Button
          </Button>
          <Button variant="primary_soft" size="medium">
            Button
          </Button>
          <Button variant="primary_soft" size="large">
            Button
          </Button>
          <Button variant="primary_soft" size="xlarge">
            Button
          </Button>
          <Button variant="primary_soft" size="xlarge" isDisabled>
            Button
          </Button>
          <Button
            iconLeft={<Rocket size={20} />}
            variant="primary_soft"
            size="large"
          >
            Button
          </Button>
          <Button
            iconRight={<Rocket size={20} />}
            variant="primary_soft"
            size="large"
          >
            Button
          </Button>
          <Button
            iconLeft={<Rocket size={20} />}
            iconRight={<Rocket size={20} />}
            variant="primary_soft"
            size="large"
          >
            Button
          </Button>
          <Button
            iconOnly={<Rocket size={20} />}
            variant="primary_soft"
            size="large"
          >
            Button
          </Button>
        </div>
        <div className="flex gap-5 mb-8">
          <Button variant="secondary" size="small">
            Button
          </Button>
          <Button variant="secondary" size="medium">
            Button
          </Button>
          <Button variant="secondary" size="large">
            Button
          </Button>
          <Button variant="secondary" size="xlarge">
            Button
          </Button>
          <Button variant="secondary" size="xlarge" isDisabled>
            Button
          </Button>
          <Button
            iconLeft={<Rocket size={20} />}
            variant="secondary"
            size="large"
          >
            Button
          </Button>
          <Button
            iconRight={<Rocket size={20} />}
            variant="secondary"
            size="large"
          >
            Button
          </Button>
          <Button
            iconLeft={<Rocket size={20} />}
            iconRight={<Rocket size={20} />}
            variant="secondary"
            size="large"
          >
            Button
          </Button>
          <Button
            iconOnly={<Rocket size={20} />}
            variant="secondary"
            size="large"
          >
            Button
          </Button>
        </div>
        <div className="flex gap-5 mb-8">
          <Button variant="neutral" size="small">
            Button
          </Button>
          <Button variant="neutral" size="medium">
            Button
          </Button>
          <Button variant="neutral" size="large">
            Button
          </Button>
          <Button variant="neutral" size="xlarge">
            Button
          </Button>
          <Button variant="neutral" size="xlarge" isDisabled>
            Button
          </Button>
          <Button
            iconLeft={<Rocket size={20} />}
            variant="neutral"
            size="large"
          >
            Button
          </Button>
          <Button
            iconRight={<Rocket size={20} />}
            variant="neutral"
            size="large"
          >
            Button
          </Button>
          <Button
            iconLeft={<Rocket size={20} />}
            iconRight={<Rocket size={20} />}
            variant="neutral"
            size="large"
          >
            Button
          </Button>
          <Button
            iconOnly={<Rocket size={20} />}
            variant="neutral"
            size="large"
          >
            Button
          </Button>
        </div>
        <div className="flex gap-5 mb-8">
          <Button variant="tertiary" size="small">
            Button
          </Button>
          <Button variant="tertiary" size="medium">
            Button
          </Button>
          <Button variant="tertiary" size="large">
            Button
          </Button>
          <Button variant="tertiary" size="xlarge">
            Button
          </Button>
          <Button variant="tertiary" size="xlarge" isDisabled>
            Button
          </Button>
          <Button
            iconLeft={<Rocket size={20} />}
            variant="tertiary"
            size="large"
          >
            Button
          </Button>
          <Button
            iconRight={<Rocket size={20} />}
            variant="tertiary"
            size="large"
          >
            Button
          </Button>
          <Button
            iconLeft={<Rocket size={20} />}
            iconRight={<Rocket size={20} />}
            variant="tertiary"
            size="large"
          >
            Button
          </Button>
          <Button
            iconOnly={<Rocket size={20} />}
            variant="tertiary"
            size="large"
          >
            Button
          </Button>
        </div>
        <div className="flex gap-5 mb-8">
          <Button variant="danger" size="small">
            Button
          </Button>
          <Button variant="danger" size="medium">
            Button
          </Button>
          <Button variant="danger" size="large">
            Button
          </Button>
          <Button variant="danger" size="xlarge">
            Button
          </Button>
          <Button variant="danger" size="xlarge" isDisabled>
            Button
          </Button>
          <Button iconLeft={<Rocket size={20} />} variant="danger" size="large">
            Button
          </Button>
          <Button
            iconRight={<Rocket size={20} />}
            variant="danger"
            size="large"
          >
            Button
          </Button>
          <Button
            iconLeft={<Rocket size={20} />}
            iconRight={<Rocket size={20} />}
            variant="danger"
            size="large"
          >
            Button
          </Button>
          <Button iconOnly={<Rocket size={20} />} variant="danger" size="large">
            Button
          </Button>
        </div>
        <div className="flex gap-5 mb-8">
          <Button variant="danger_soft" size="small">
            Button
          </Button>
          <Button variant="danger_soft" size="medium">
            Button
          </Button>
          <Button variant="danger_soft" size="large">
            Button
          </Button>
          <Button variant="danger_soft" size="xlarge">
            Button
          </Button>
          <Button variant="danger_soft" size="xlarge" isDisabled>
            Button
          </Button>
          <Button
            iconLeft={<Rocket size={20} />}
            variant="danger_soft"
            size="large"
          >
            Button
          </Button>
          <Button
            iconRight={<Rocket size={20} />}
            variant="danger_soft"
            size="large"
          >
            Button
          </Button>
          <Button
            iconLeft={<Rocket size={20} />}
            iconRight={<Rocket size={20} />}
            variant="danger_soft"
            size="large"
          >
            Button
          </Button>
          <Button
            iconOnly={<Rocket size={20} />}
            variant="danger_soft"
            size="large"
          >
            Button
          </Button> */}
        {/* </div> */}
        <div className="flex gap-5 mb-8">
          <div className="space-y-4 p-8">
            {/* <div className="flex gap-5 mb-8">
              <Input
                placeholder="Type here"
                leftIcon={<UserCircle size={20} />}
                rightIcon={<Rocket size={20} />}
                size="small"
              />
              <Input
                placeholder="Type here"
                leftIcon={<UserCircle size={24} />}
                rightIcon={<Rocket size={24} />}
                size="medium"
              />
              <Input
                placeholder="Type here"
                leftIcon={<UserCircle size={24} />}
                rightIcon={<Rocket size={24} />} 
                size="large"
              />
              <Input
                placeholder="Type here"
                leftIcon={<UserCircle size={24} />}
                rightIcon={<Rocket size={24} />}
                size="large"
                isDisabled
              />
            </div>

            <div className="flex gap-5 mb-8">
              <Input
                size="small"
                leftIcon={<UserCircle size={20} />}
                inputType="addon-left"
                leftAddon="Addon"
                placeholder="Type here"
              />
              <Input
                size="medium"
                inputType="addon-left"
                leftIcon={<UserCircle size={24} />}
                leftAddon="Addon"
                placeholder="Type here"
              />
              <Input
                size="large"
                inputType="addon-left"
                leftAddon="Addon"
                leftIcon={<UserCircle size={24} />}
                placeholder="Type here"
              />
              <Input
                size="large"
                inputType="addon-left"
                leftIcon={<UserCircle size={24} />}
                leftAddon="Addon"
                placeholder="Type here"
                isDisabled
              />
            </div>

            <div className="flex gap-5 mb-8">
              <Input
                size="small"
                inputType="addon-right"
                rightAddon=".com"
                placeholder="Domain"
              />
              <Input
                size="medium"
                inputType="addon-right"
                rightAddon=".com"
                placeholder="Domain"
              />
              <Input
                size="large"
                inputType="addon-right"
                rightAddon=".com"
                placeholder="Domain"
              />
              <Input
                size="large"
                inputType="addon-right"
                rightAddon=".com"
                placeholder="Domain"
                isDisabled
              />
            </div> */}

            {/* Select Left */}
            {/* <div className="flex gap-5 mb-8">
              <Input
                size="small"
                inputType="select-left"
                label="label"
                options={[
                  { label: "option1", value: "option1" },
                  { label: "option2", value: "option2" },
                  { label: "option3", value: "option3" },
                ]}
                placeholder="Type here"
              />
              <Input
                size="medium"
                inputType="select-left"
                label="label"
                options={[
                  { label: "option1", value: "option1" },
                  { label: "option2", value: "option2" },
                  { label: "option3", value: "option3" },
                ]}
                placeholder="Type here"
              />

              <Input
                size="large"
                inputType="select-left"
                label="label"
                options={[
                  { label: "option1", value: "option1" },
                  { label: "option2", value: "option2" },
                  { label: "option3", value: "option3" },
                ]}
                placeholder="Type here"
              />
              <Input
                size="large"
                inputType="select-left"
                label="label"
                options={[
                  { label: "option1", value: "option1" },
                  { label: "option2", value: "option2" },
                  { label: "option3", value: "option3" },
                ]}
                placeholder="Type here"
                isDisabled
              />
            </div>
 */}
            {/* Select Right */}

            {/* <div className="flex gap-5 mb-8">
              <Input
                size="small"
                inputType="select-right"
                label="label"
                options={[
                  { label: "option1", value: "option1" },
                  { label: "option2", value: "option2" },
                  { label: "option3", value: "option3" },
                ]}
                placeholder="Type here"
              />
              <Input
                size="medium"
                inputType="select-right"
                label="label"
                options={[
                  { label: "option1", value: "option1" },
                  { label: "option2", value: "option2" },
                  { label: "option3", value: "option3" },
                ]}
                placeholder="Type here"
              />

              <Input
                size="large"
                inputType="select-right"
                label="label"
                options={[
                  { label: "option1", value: "option1" },
                  { label: "option2", value: "option2" },
                  { label: "option3", value: "option3" },
                ]}
                placeholder="Type here"
              />
              <Input
                size="large"
                inputType="select-right"
                label="label"
                options={[
                  { label: "option1", value: "option1" },
                  { label: "option2", value: "option2" },
                  { label: "option3", value: "option3" },
                ]}
                placeholder="Type here"
                isDisabled
              />
            </div>
 */}
            {/* Plus & Minus Button */}

            {/* <div className="flex gap-5 mb-8">
              <Input inputType="plus-minus" />

              <Input inputType="plus-minus"></Input>
            </div> */}
          </div>
        </div>

        <div className="flex gap-5 mb-8">
          <div className="space-y-4 p-8">
            {/* <div className="flex gap-5 mb-8">
              <Search
                size="sm"
                leftIcon={<MagnifyingGlass size={20} />}
                placeholder="Search for items..."
              />
              <Search
                size="md"
                leftIcon={<MagnifyingGlass size={24} />}
                placeholder="Search for items..."
              />
              <Search
                size="lg"
                leftIcon={<MagnifyingGlass size={24} />}
                placeholder="Search for items..."
              />
              <Search
                size="lg"
                leftIcon={<MagnifyingGlass size={24} />}
                placeholder="Search for items..."
                isDisabled
              />
            </div> */}
          </div>
        </div>
        <div className="flex gap-5 mb-4">
          <DatePicker label="Label" type="date-field" size="sm" />
          <DatePicker label="Label" type="date-field" size="md" />
          <DatePicker label="Label" type="date-field" size="lg" />
          <DatePicker label="Label" type="date-field" size="lg" isDisabled />
        </div>
        <div className="flex gap-2 mb-8">
          <DatePicker label="Select Time" type="time-field" size="sm" />
          <DatePicker label="Select Time" type="time-field" size="md" />
          <DatePicker label="Select Time" type="time-field" size="lg" />
          <DatePicker
            label="Select Time"
            type="time-field"
            size="lg"
            isDisabled
          />
        </div>

        <div className="flex gap-5 mb-8">
          <DatePicker type="time-select" size="sm" />
          <DatePicker type="time-select" size="md" />
          <DatePicker type="time-select" size="lg" />
          <DatePicker type="time-select" size="lg" isDisabled />
        </div>
        <div className="flex gap-8 mb-8">
          <DatePicker type="date-select" size="sm" />
          <DatePicker type="date-select" size="md" />
          <DatePicker type="date-select" size="lg" />
          <DatePicker type="date-select" size="lg" isDisabled />
        </div>

        {/* <div className="flex gap-5 mb-8">
          <Dropdown
            label="Select an option"
            size="sm"
            options={[
              { value: "apple", label: "Apple" },
              { value: "banana", label: "Banana" },
              { value: "cherry", label: "Cherry" },
            ]}
          />
          <Dropdown
            label="Select an option"
            size="md"
            multiSelect={true}
            options={[
              { value: "apple", label: "Apple" },
              { value: "banana", label: "Banana" },
              { value: "cherry", label: "Cherry" },
            ]}
          />
          <Dropdown
            label="Select Items"
            size="lg"
            multiSelect={true}
            options={[
              { value: "option1", label: "Option 1" },
              { value: "option2", label: "Option 2" },
              { value: "option3", label: "Option 3" },
            ]}
          />

          <Dropdown
            label="Select an option"
            size="lg"
            options={[
              { value: "apple", label: "Apple" },
              { value: "banana", label: "Banana" },
              { value: "cherry", label: "Cherry" },
            ]}
            isDisabled
          />
        </div> */}

        <div className="flex gap-5 mb-8">
          {/* Filled Radio */}
          <div className="space-y-2">
            <Radio value="Option1" id="option1" />
            <Radio
              value="Option2"
              id="option2 "
              description="Description text for option"
            />
            <Radio
              value="Option3"
              id="option3"
              description="Description text for option"
              applyBorder={true}
            />
          </div>
          <div className="space-y-2">
            <Checkbox
              id="accept-checkbox"
              label="Accept Terms"
              description="You must accept terms and conditions"
              checked={formData.accept === "Yes"}
              value="Yes"
              onChange={(e) => {
                setFormData((prev) => ({
                  ...prev,
                  accept: e.target.checked ? "Yes" : "",
                }));
              }}
              isError={attemptedSubmit && formData.accept !== "Yes"}
              applyBorder={true}
            />

            <Checkbox
              id="checkbox"
              description="Description text for option"
              isIndeterminate={true}
              value="accept"
            />
            <Checkbox
              id="checkbox"
              description="Description text for option"
              applyBorder={true}
              value="accept"
            />
            <Checkbox
              id="checkbox"
              description="Description text for option"
              isError={false}
              isDisabled
              isIndeterminate={false}
              value="accept"
            />
          </div>
          <div className="space-y-1">
            <Switch
              checked={true}
              onChange={(checked: boolean) => console.log(checked)}
              label="Enable Notifications"
              description="Turn on to receive updates"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
