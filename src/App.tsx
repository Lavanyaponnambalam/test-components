import {
  CalendarDots,
  MagnifyingGlass,
  Rocket,
  UserCircle,
} from "@phosphor-icons/react";
import Button from "./components/ui/button";
import Input from "./components/ui/input";
import Textarea from "./components/ui/textarea";
import Search from "./components/ui/seacrh";
import DatePicker from "./components/ui/date-picker";
import Radio from "./components/ui/radiobutton";
import Checkbox from "./components/ui/checkbox";

function App() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-action-base-white">
      <div className="border border-action-border-neutral-light_normal p-8 rounded-lg shadow-lg bg-action-base-white">
        <div className="flex gap-5 mb-8">
          <Button variant="primary" size="small">
            Button
          </Button>
          <Button variant="primary" size="medium">
            Button
          </Button>
          <Button variant="primary" size="large">
            Button
          </Button>
          <Button variant="primary" size="xlarge">
            Button
          </Button>
          <Button variant="primary" size="xlarge" isDisabled>
            Button
          </Button>
          <Button
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
          </Button>
        </div>
        <div className="flex gap-5 mb-8">
          <div className="space-y-4 p-8">
            <div className="flex gap-5 mb-8">
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
            </div>

            {/* Select Left */}
            <div className="flex gap-5 mb-8">
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

            {/* Select Right */}

            <div className="flex gap-5 mb-8">
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

            {/* Plus & Minus Button */}

            <div className="flex gap-5 mb-8">
              <Input inputType="plus-minus" />

              <Input inputType="plus-minus"></Input>
            </div>
          </div>
        </div>


            <div className="flex gap-5 mb-8">
              <Textarea
                label="Label"
                size="md"
                placeholder="Type here..."
              />
              <Textarea
                label="Label"
                size="lg"
                placeholder="Type here..."
              />
              <Textarea
                label="Label"
                size="lg"
                placeholder="Type here..."
                isDisabled
              />

        </div>
        <div className="flex gap-5 mb-8">
          <div className="space-y-4 p-8">
            <div className="flex gap-5 mb-8">
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
            </div>
          </div>
        </div>
        <div className="flex gap-5 mb-4">
          <DatePicker
            label="Label"
            type="date-field"
            size="sm"
          />
          <DatePicker label="Label" type="date-field" size="md" />
          <DatePicker label="Label" type="date-field" size="lg" />
          <DatePicker label="Label" type="date-field" size="lg" isDisabled />
          </div>


          <div className="flex gap-5 mb-8">
          <DatePicker label="Select Time" type="time-field" size="md" isError />
</div>

          {/* <div className="flex gap-5 mb-8">
              <div className="space-y-4 p-8">
              <div className="flex gap-5 mb-8">
              <DatePicker
                label="Select Time"
                type="time-field"
                size="md"
                isError
              />
              </div>
              </div>
              </div>
              <DatePicker
                label="Disabled Date"
                type="date-select"
                size="lg"
                isDisabled
              />
              <DatePicker
                label="Select Time"
                type="time-select"
                size="lg"
                description="Choose a convenient time."
              /> */}


        <div className="flex gap-10 mb-8">

      {/* Filled Radio */}
<div className="space-y-2">
  <Radio value="Option1" id="option1" />
  <Radio  value="Option2" id="option2 " description="Description text for option" />
  <Radio value="Option3" id="option3" description="Description text for option" applyBorder={true}/>
</div>
<div className="space-y-2">
<Checkbox
  id="checkbox"
  isError={false}
  isDisabled={false}
  isIndeterminate={false} 
  value="accept"
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
</div>
      </div>
    </div>
  );
}

export default App;
