// EditProfile.tsx

import CommonDialog from ".";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";

export function EditProfile() {
  return (
    <CommonDialog triggerLabel='Edit Profile'>
      <div className='w-full'>
        <h2 className='text-lg font-semibold mb-2'>Create New Folder</h2>
        <p className='text-sm text-muted-foreground mb-6'>
          Create a new folder to organize your chats with custom AI
          instructions.
        </p>

        <form className='space-y-4'>
          <div className='space-y-2'>
            <Label htmlFor='folderName'>Folder Name</Label>
            <Input id='folderName' placeholder='Enter' />
          </div>

          <div className='space-y-2'>
            <Label htmlFor='description'>Description</Label>
            <Textarea id='description' placeholder='Brief description' />
          </div>

          <div className='space-y-2'>
            <Label htmlFor='instructions'>Instructions</Label>
            <Textarea
              id='instructions'
              placeholder='Special instructions for AI in this folder'
            />
          </div>

          <div className='flex justify-end space-x-2 pt-4'>
            <Button variant='outline'>Cancel</Button>
            <Button variant={"default"}>Create</Button>
          </div>
        </form>
      </div>
    </CommonDialog>
  );
}
